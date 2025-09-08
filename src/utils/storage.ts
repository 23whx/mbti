// 本地存储管理工具
export interface CachedAnswers {
  answers: Record<number, number>;
  timestamp: number;
  currentQuestion: number;
  progress: number;
}

export interface TestResult {
  mbtiType: string;
  scores: any;
  timestamp: number;
  answers: Record<number, number>;
}

// 缓存过期时间：24小时
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24小时毫秒

// 存储键名
const STORAGE_KEYS = {
  ANSWERS: 'mbti-answers-cache',
  RESULT: 'mbti-test-result',
  SETTINGS: 'mbti-user-settings'
};

// 保存答题进度
export const saveAnswersCache = (
  answers: Record<number, number>, 
  currentQuestion: number = 1
): void => {
  try {
    const cache: CachedAnswers = {
      answers,
      timestamp: Date.now(),
      currentQuestion,
      progress: Object.keys(answers).length
    };
    
    localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(cache));
  } catch (error) {
    console.warn('无法保存答题进度:', error);
  }
};

// 读取答题进度
export const loadAnswersCache = (): CachedAnswers | null => {
  try {
    const cached = localStorage.getItem(STORAGE_KEYS.ANSWERS);
    if (!cached) return null;
    
    const cache: CachedAnswers = JSON.parse(cached);
    
    // 检查是否过期
    const isExpired = Date.now() - cache.timestamp > CACHE_DURATION;
    if (isExpired) {
      clearAnswersCache();
      return null;
    }
    
    return cache;
  } catch (error) {
    console.warn('无法读取答题进度:', error);
    return null;
  }
};

// 清除答题缓存
export const clearAnswersCache = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.ANSWERS);
    // 同时清除题目顺序缓存和排序设置，确保重新开始时重新处理
    localStorage.removeItem('mbti-question-order');
    localStorage.removeItem('mbti-shuffle-setting');
  } catch (error) {
    console.warn('无法清除答题缓存:', error);
  }
};

// 保存测试结果
export const saveTestResult = (result: TestResult): void => {
  try {
    const resultWithTimestamp = {
      ...result,
      timestamp: Date.now()
    };
    
    localStorage.setItem(STORAGE_KEYS.RESULT, JSON.stringify(resultWithTimestamp));
    
    // 测试完成后清除答题缓存
    clearAnswersCache();
  } catch (error) {
    console.warn('无法保存测试结果:', error);
  }
};

// 读取测试结果
export const loadTestResult = (): TestResult | null => {
  try {
    const cached = localStorage.getItem(STORAGE_KEYS.RESULT);
    if (!cached) return null;
    
    const result: TestResult = JSON.parse(cached);
    return result;
  } catch (error) {
    console.warn('无法读取测试结果:', error);
    return null;
  }
};

// 清除测试结果
export const clearTestResult = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.RESULT);
  } catch (error) {
    console.warn('无法清除测试结果:', error);
  }
};

// 获取缓存剩余时间（分钟）
export const getCacheRemainingTime = (): number => {
  const cache = loadAnswersCache();
  if (!cache) return 0;
  
  const elapsed = Date.now() - cache.timestamp;
  const remaining = CACHE_DURATION - elapsed;
  
  return Math.max(0, Math.floor(remaining / (60 * 1000))); // 转换为分钟
};

// 检查是否有有效缓存
export const hasValidCache = (): boolean => {
  return loadAnswersCache() !== null;
};

// 获取存储使用情况
export const getStorageUsage = (): {
  answersSize: number;
  resultSize: number;
  totalSize: number;
} => {
  try {
    const answersData = localStorage.getItem(STORAGE_KEYS.ANSWERS) || '';
    const resultData = localStorage.getItem(STORAGE_KEYS.RESULT) || '';
    
    return {
      answersSize: new Blob([answersData]).size,
      resultSize: new Blob([resultData]).size,
      totalSize: new Blob([answersData + resultData]).size
    };
  } catch (error) {
    return { answersSize: 0, resultSize: 0, totalSize: 0 };
  }
};
