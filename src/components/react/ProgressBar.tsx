import React, { useState, useEffect } from 'react';

// 语言映射类型
type LocaleCode = 'zh-CN' | 'en-US' | 'ja-JP';

// 翻译对象
const translations = {
  'zh-CN': {
    progress: '答题进度',
    questions: '题',
    start_journey: '开始您的性格探索之旅',
    good_start: '很好的开始！继续保持',
    quarter_done: '已完成四分之一，进展顺利',
    halfway: '已过半程，坚持就是胜利',
    final_stretch: '即将完成，最后冲刺',
    completed: '恭喜完成所有题目！',
    estimated_time: '预计还需',
    minutes_left: '分钟完成'
  },
  'en-US': {
    progress: 'Answer Progress',
    questions: 'questions',
    start_journey: 'Start your personality exploration journey',
    good_start: 'Great start! Keep going',
    quarter_done: 'Quarter completed, good progress',
    halfway: 'Halfway done, keep it up',
    final_stretch: 'Almost there, final stretch',
    completed: 'Congratulations! All questions completed!',
    estimated_time: 'Estimated',
    minutes_left: 'minutes remaining'
  },
  'ja-JP': {
    progress: '回答進捗',
    questions: '問',
    start_journey: '性格探索の旅を始めましょう',
    good_start: '良いスタートです！続けてください',
    quarter_done: '4分の1完了、順調です',
    halfway: '半分完了、頑張ってください',
    final_stretch: 'もうすぐ完了、最後の頑張り',
    completed: 'おめでとうございます！全ての質問が完了しました！',
    estimated_time: '推定',
    minutes_left: '分残り'
  }
};

interface ProgressBarProps {
  current: number;
  total: number;
  percentage: number;
  showLabels?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  percentage,
  showLabels = true,
  className = ''
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<LocaleCode>('en-US');

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
  return (
    <div className={`w-full ${className}`}>
      {/* 进度信息 */}
      {showLabels && (
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium text-gray-700">
            {t('progress')}
          </div>
          <div className="text-sm text-gray-600">
            {current} / {total} {t('questions')} ({percentage}%)
          </div>
        </div>
      )}
      
      {/* 进度条容器 */}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ 
            width: `${percentage}%`,
            transition: 'width 0.5s ease-out'
          }}
        >
          {/* 进度条内的动画效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-75"></div>
        </div>
      </div>
      
      {/* 里程碑标记 */}
      <div className="relative mt-1">
        <div className="flex justify-between">
          {[25, 50, 75, 100].map((milestone) => {
            const reached = percentage >= milestone;
            return (
              <div
                key={milestone}
                className={`flex flex-col items-center transition-colors duration-200 ${
                  reached ? 'text-primary-600' : 'text-gray-300'
                }`}
                style={{ 
                  position: 'absolute',
                  left: `${milestone}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  reached 
                    ? 'bg-secondary-500' 
                    : 'bg-gray-300'
                }`}></div>
                <span className="text-xs mt-1 font-medium">{milestone}%</span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* 激励文字 */}
      {showLabels && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {percentage === 0 && t('start_journey')}
            {percentage > 0 && percentage < 25 && t('good_start')}
            {percentage >= 25 && percentage < 50 && t('quarter_done')}
            {percentage >= 50 && percentage < 75 && t('halfway')}
            {percentage >= 75 && percentage < 100 && t('final_stretch')}
            {percentage === 100 && t('completed')}
          </p>
        </div>
      )}
      
      {/* 预计剩余时间 */}
      {showLabels && current > 0 && percentage < 100 && (
        <div className="mt-2 text-center">
          <p className="text-xs text-gray-500">
            {t('estimated_time')} {Math.ceil((total - current) * 0.3)} {t('minutes_left')}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
