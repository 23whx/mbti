import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { questions } from '../../data/questions';
import { calculateQuestionScore, calculateMBTIType, initialScore, type Score } from '../../utils/scoring';
import { saveAnswersCache, loadAnswersCache, saveTestResult } from '../../utils/storage';
import ProgressBar from './ProgressBar';

// 语言映射类型
type LocaleCode = 'zh-CN' | 'en-US' | 'ja-JP';

// 翻译对象
const translations = {
  'zh-CN': {
    switch_mode: '切换到逐题模式',
    show_all: '显示所有题目',
    remaining: '题未完成',
    scale_disagree: '完全不同意',
    scale_neutral: '中立', 
    scale_agree: '完全同意',
    show_remaining: '显示所有剩余题目',
    questions_left: '题',
    analyzing: '正在分析...',
    view_results: '查看我的MBTI结果',
    continue_test: '继续答题',
    remaining_suffix: '题剩余',
    quick_nav: '快速导航',
    select_score: '选择'
  },
  'en-US': {
    switch_mode: 'Switch to step-by-step mode',
    show_all: 'Show all questions',
    remaining: 'questions remaining',
    scale_disagree: 'Strongly Disagree',
    scale_neutral: 'Neutral',
    scale_agree: 'Strongly Agree', 
    show_remaining: 'Show all remaining questions',
    questions_left: 'questions',
    analyzing: 'Analyzing...',
    view_results: 'View My MBTI Results',
    continue_test: 'Continue Test',
    remaining_suffix: 'questions left',
    quick_nav: 'Quick Navigation',
    select_score: 'Select'
  },
  'ja-JP': {
    switch_mode: 'ステップバイステップモードに切り替え',
    show_all: 'すべての質問を表示',
    remaining: '問が未完了',
    scale_disagree: '全く同意しない',
    scale_neutral: 'どちらでもない',
    scale_agree: '完全に同意する',
    show_remaining: '残りの質問をすべて表示',
    questions_left: '問',
    analyzing: '分析中...',
    view_results: 'MBTI結果を見る',
    continue_test: 'テストを続ける',
    remaining_suffix: '問残り',
    quick_nav: 'クイックナビ',
    select_score: '選択'
  }
};

interface QuestionnaireProps {
  onComplete?: (result: { type: string; scores: Score }) => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<LocaleCode>('en-US');
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);
  const [shouldShuffle, setShouldShuffle] = useState(true);

  // 获取当前语言
  const getCurrentLanguage = (): LocaleCode => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mbti-language');
      if (saved && ['zh-CN', 'en-US', 'ja-JP'].includes(saved)) {
        return saved as LocaleCode;
      }
    }
    return 'en-US';
  };

  // 翻译函数
  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations[LocaleCode]] || key;
  };

  // 随机排列数组函数 (Fisher-Yates 洗牌算法)
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // 计算进度
  const progress = useMemo(() => {
    const answered = Object.keys(answers).length;
    return {
      answered,
      total: shuffledQuestions.length,
      percentage: Math.round((answered / shuffledQuestions.length) * 100)
    };
  }, [answers, shuffledQuestions]);

  // 检查是否全部完成
  const isComplete = useMemo(() => {
    return questions.every(q => answers[q.id] !== undefined);
  }, [answers]);

  // 初始化语言设置
  useEffect(() => {
    setCurrentLanguage(getCurrentLanguage());
    
    // 监听语言变化
    const handleLanguageChange = () => {
      setCurrentLanguage(getCurrentLanguage());
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('languageChanged', handleLanguageChange);
      return () => window.removeEventListener('languageChanged', handleLanguageChange);
    }
  }, []);

  // 初始化排序设置和加载缓存数据
  useEffect(() => {
    // 检查URL参数决定是否打乱顺序
    const urlParams = new URLSearchParams(window.location.search);
    const shuffleParam = urlParams.get('shuffle');
    const shouldShuffleQuestions = shuffleParam !== 'false'; // 默认打乱，除非明确设置为false
    setShouldShuffle(shouldShuffleQuestions);
    
    // 检查是否已有缓存的排序设置和题目顺序
    const cachedShuffle = localStorage.getItem('mbti-shuffle-setting');
    const cachedOrder = localStorage.getItem('mbti-question-order');
    const cached = loadAnswersCache();
    
    // 如果有缓存数据且缓存的排序设置与当前设置一致，则恢复
    if (cachedOrder && cached && Object.keys(cached.answers).length > 0 && 
        cachedShuffle === String(shouldShuffleQuestions)) {
      try {
        const orderIds = JSON.parse(cachedOrder);
        let orderedQuestions = orderIds
          .map((id: number) => questions.find((q) => q!.id === id))
          .filter(Boolean) as typeof questions;
        
        if (orderedQuestions.length === questions.length) {
          // 重新分配序号 1-86
          orderedQuestions = orderedQuestions.map((q: typeof questions[number], index: number) => ({
            ...q,
            displayOrder: index + 1
          }));
          setShuffledQuestions(orderedQuestions);
        } else {
          // 缓存不完整，重新处理
          setupNewQuestionOrder(shouldShuffleQuestions);
        }
      } catch {
        // 解析失败，重新处理
        setupNewQuestionOrder(shouldShuffleQuestions);
      }
    } else {
      // 新测试或设置改变，重新处理题目顺序
      setupNewQuestionOrder(shouldShuffleQuestions);
    }
    
    if (cached) {
      setAnswers(cached.answers);
      setCurrentQuestionIndex(cached.currentQuestion || 0);
      
      // 如果有较多进度，显示所有题目
      if (cached.progress > 10) {
        setShowAll(true);
      }
    }
  }, []);
  
  // 设置新的题目顺序
  const setupNewQuestionOrder = (shuffle: boolean) => {
    let processedQuestions;
    
    if (shuffle) {
      // 打乱题目顺序，但重新分配1-86的序号
      const shuffled = shuffleArray(questions);
      processedQuestions = shuffled.map((q, index) => ({
        ...q,
        displayOrder: index + 1
      }));
    } else {
      // 保持原始顺序，序号也保持原样
      processedQuestions = questions.map((q, index) => ({
        ...q,
        displayOrder: index + 1
      }));
    }
    
    setShuffledQuestions(processedQuestions);
    localStorage.setItem('mbti-question-order', JSON.stringify(processedQuestions.map(q => q.id)));
    localStorage.setItem('mbti-shuffle-setting', String(shuffle));
  };

  // 保存进度到缓存
  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      saveAnswersCache(answers, currentQuestionIndex);
    }
  }, [answers, currentQuestionIndex]);

  // 处理答案选择
  const handleAnswer = useCallback((questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));

    // 如果是单题模式，自动跳转到下一题
    if (!showAll) {
      const currentIndex = shuffledQuestions.findIndex(q => q.id === questionId);
      if (currentIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentIndex + 1);
      }
    }
  }, [showAll, shuffledQuestions]);

  // 计算最终结果
  const calculateResult = useCallback(() => {
    let scores = { ...initialScore };
    
    Object.entries(answers).forEach(([questionId, value]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question) {
        const questionScores = calculateQuestionScore(question.dimension, value);
        Object.entries(questionScores).forEach(([key, score]) => {
          scores[key as keyof Score] += score;
        });
      }
    });
    
    const mbtiType = calculateMBTIType(scores);
    return { type: mbtiType, scores };
  }, [answers]);

  // 提交答案
  const handleSubmit = useCallback(async () => {
    if (!isComplete) return;
    
    setIsSubmitting(true);
    
    try {
      const result = calculateResult();
      
      // 保存结果
      saveTestResult({
        mbtiType: result.type,
        scores: result.scores,
        timestamp: Date.now(),
        answers
      });
      
      // 回调或跳转
      if (onComplete) {
        onComplete(result);
      } else {
        window.location.href = '/result';
      }
    } catch (error) {
      console.error('提交失败:', error);
      alert('提交时出现错误，请重试');
    } finally {
      setIsSubmitting(false);
    }
  }, [isComplete, calculateResult, answers, onComplete]);

  // 显示模式切换
  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  // 跳转到特定题目
  const goToQuestion = useCallback((index: number) => {
    setCurrentQuestionIndex(index);
  }, []);

  // 当前显示的题目
  const displayQuestions = showAll ? shuffledQuestions : shuffledQuestions.slice(0, Math.max(10, currentQuestionIndex + 5));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-secondary-50 min-h-screen">
      {/* 固定顶部进度条 */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-primary-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-8">
        <ProgressBar
          current={progress.answered}
          total={progress.total}
          percentage={progress.percentage}
        />
        
        {/* 模式切换按钮 */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={toggleShowAll}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            {showAll ? t('switch_mode') : t('show_all')}
          </button>
          
          {progress.answered > 0 && (
            <div className="text-sm text-gray-500">
              {progress.total - progress.answered} {t('remaining')}
            </div>
          )}
        </div>
      </div>

      {/* 题目列表 */}
      <div className="grid xl:grid-cols-2 gap-6">
        {displayQuestions.map((question, index) => {
          const isAnswered = answers[question.id] !== undefined;
          const isCurrentQuestion = index === currentQuestionIndex && !showAll;
          
          return (
            <div
              key={question.id}
              id={`question-${question.id}`}
              className={`question-card ${isAnswered ? 'answered' : ''} ${
                isCurrentQuestion ? 'ring-2 ring-primary-300' : ''
              }`}
              style={{
                animationDelay: showAll ? `${index * 0.05}s` : '0s'
              }}
            >
              <div className="space-y-4">
                {/* 题目编号和文本 */}
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                    isAnswered 
                      ? 'bg-secondary-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {question.displayOrder || question.id}
                  </div>
                  
                  <h3 className="text-base font-medium text-gray-900 leading-relaxed flex-1">
                    {question.text[currentLanguage]}
                  </h3>
                </div>
                
                {/* Likert量表选项（按钮与标签分组，确保标签正下方对齐） */}
                <div className="mt-1">
                  <div className="grid grid-cols-5 gap-2 max-w-xs mx-auto">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div key={value} className="flex flex-col items-center">
                        <button
                          onClick={() => handleAnswer(question.id, value)}
                          className={`likert-button-compact ${
                            answers[question.id] === value ? 'selected' : ''
                          }`}
                          aria-label={`${t('select_score')} ${value}`}
                        >
                          {value}
                        </button>
                        {(value === 1 || value === 3 || value === 5) && (
                          <span className="likert-label">
                            {value === 1
                              ? t('scale_disagree')
                              : value === 3
                              ? t('scale_neutral')
                              : t('scale_agree')}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* 加载更多按钮 (逐题模式) */}
      {!showAll && displayQuestions.length < shuffledQuestions.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="btn-secondary"
          >
            {t('show_remaining')} ({shuffledQuestions.length - displayQuestions.length} {t('questions_left')})
          </button>
        </div>
      )}

      {/* 提交按钮 */}
      {progress.answered > 0 && (
        <div className="sticky bottom-6 mt-12 text-center">
          <div className="inline-block bg-white rounded-full shadow-lg border border-primary-100 p-1">
            <button
              onClick={handleSubmit}
              disabled={!isComplete || isSubmitting}
              className={`btn-primary px-8 py-4 text-lg ${
                !isComplete ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="loading-spinner mr-2"></div>
                  {t('analyzing')}
                </div>
              ) : isComplete ? (
                <div className="flex items-center">
                  {t('view_results')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              ) : (
                `${t('continue_test')} (${progress.total - progress.answered} ${t('remaining_suffix')})`
              )}
            </button>
          </div>
        </div>
      )}

      {/* 快速导航 (显示所有题目时) */}
      {showAll && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="bg-white rounded-lg shadow-lg border border-primary-100 p-3 max-h-80 overflow-y-auto">
            <div className="text-xs font-medium text-gray-600 mb-2">{t('quick_nav')}</div>
            <div className="grid grid-cols-4 gap-1">
              {shuffledQuestions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => {
                    document.getElementById(`question-${question.id}`)?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                  className={`w-6 h-6 text-xs rounded ${
                    answers[question.id] !== undefined
                      ? 'bg-secondary-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {question.displayOrder || question.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
