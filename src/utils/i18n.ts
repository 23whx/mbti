// 多语言支持配置
export type Language = 'zh' | 'en' | 'ja';

export interface Translations {
  // 通用
  common: {
    home: string;
    test: string;
    result: string;
    start: string;
    next: string;
    previous: string;
    submit: string;
    retake: string;
    share: string;
    download: string;
    copyLink: string;
    loading: string;
    error: string;
    confirm: string;
    cancel: string;
  };
  
  // 首页
  home: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      scientific: {
        title: string;
        description: string;
      };
      comprehensive: {
        title: string;
        description: string;
      };
      instant: {
        title: string;
        description: string;
      };
      free: {
        title: string;
        description: string;
      };
    };
    startButton: string;
    learnMore: string;
  };
  
  // 测试页面
  test: {
    title: string;
    progress: string;
    question: string;
    options: {
      stronglyDisagree: string;
      disagree: string;
      neutral: string;
      agree: string;
      stronglyAgree: string;
    };
    submitTest: string;
    confirmSubmit: string;
    backToTest: string;
  };
  
  // 结果页面
  result: {
    title: string;
    yourType: string;
    dimensionAnalysis: string;
    dimensionDescription: string;
    dimensions: {
      energy: string;
      information: string;
      decision: string;
      lifestyle: string;
    };
    traits: {
      strengths: string;
      weaknesses: string;
      careers: string;
    };
    actions: {
      retakeTest: string;
      downloadResult: string;
      shareResult: string;
    };
    share: {
      twitter: string;
      facebook: string;
      copyLink: string;
      shareText: string;
    };
    noResult: {
      title: string;
      description: string;
      takeTest: string;
    };
  };
  
  // MBTI维度
  mbti: {
    dimensions: {
      E: string;
      I: string;
      S: string;
      N: string;
      T: string;
      F: string;
      J: string;
      P: string;
    };
    fullNames: {
      E: string;
      I: string;
      S: string;
      N: string;
      T: string;
      F: string;
      J: string;
      P: string;
    };
  };
}

// 中文翻译
export const zhTranslations: Translations = {
  common: {
    home: '首页',
    test: '测试',
    result: '结果',
    start: '开始',
    next: '下一题',
    previous: '上一题',
    submit: '提交',
    retake: '重新测试',
    share: '分享',
    download: '下载',
    copyLink: '复制链接',
    loading: '加载中...',
    error: '错误',
    confirm: '确认',
    cancel: '取消',
  },
  home: {
    title: 'MBTI 性格测试',
    subtitle: '发现真正的自己',
    description: '通过科学的MBTI性格测试，深入了解您的性格类型、优势特点和职业发展方向。',
    features: {
      scientific: {
        title: '科学准确',
        description: '基于荣格心理学理论和大量数据验证'
      },
      comprehensive: {
        title: '全面分析',
        description: '从四个维度深度解析您的性格特征'
      },
      instant: {
        title: '即时结果',
        description: '完成测试后立即获得详细的分析报告'
      },
      free: {
        title: '完全免费',
        description: '无需注册，永久免费使用所有功能'
      }
    },
    startButton: '开始测试',
    learnMore: '了解更多'
  },
  test: {
    title: 'MBTI 性格测试',
    progress: '进度',
    question: '题目',
    options: {
      stronglyDisagree: '非常不同意',
      disagree: '不同意',
      neutral: '中性',
      agree: '同意',
      stronglyAgree: '非常同意'
    },
    submitTest: '提交测试',
    confirmSubmit: '确定要提交测试吗？提交后将无法修改答案。',
    backToTest: '返回测试'
  },
  result: {
    title: 'MBTI测试结果',
    yourType: '您的性格类型',
    dimensionAnalysis: '维度分析',
    dimensionDescription: '以下显示了您在四个核心维度上的偏好强度',
    dimensions: {
      energy: '能量导向',
      information: '信息获取',
      decision: '决策方式',
      lifestyle: '生活方式'
    },
    traits: {
      strengths: '优势特点',
      weaknesses: '注意事项',
      careers: '适合职业'
    },
    actions: {
      retakeTest: '重新测试',
      downloadResult: '下载结果',
      shareResult: '分享结果'
    },
    share: {
      twitter: 'Twitter',
      facebook: 'Facebook',
      copyLink: '复制链接',
      shareText: '我的MBTI性格类型是 {type} ({name})！快来测试你的性格类型吧！'
    },
    noResult: {
      title: '暂无测试结果',
      description: '您还没有完成MBTI性格测试，请先完成测试获取结果。',
      takeTest: '开始测试'
    }
  },
  mbti: {
    dimensions: {
      E: '外向',
      I: '内向',
      S: '感觉',
      N: '直觉',
      T: '思考',
      F: '情感',
      J: '判断',
      P: '知觉'
    },
    fullNames: {
      E: '外向 (E)',
      I: '内向 (I)',
      S: '感觉 (S)',
      N: '直觉 (N)',
      T: '思考 (T)',
      F: '情感 (F)',
      J: '判断 (J)',
      P: '知觉 (P)'
    }
  }
};

// 英文翻译
export const enTranslations: Translations = {
  common: {
    home: 'Home',
    test: 'Test',
    result: 'Result',
    start: 'Start',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    retake: 'Retake',
    share: 'Share',
    download: 'Download',
    copyLink: 'Copy Link',
    loading: 'Loading...',
    error: 'Error',
    confirm: 'Confirm',
    cancel: 'Cancel',
  },
  home: {
    title: 'MBTI Personality Test',
    subtitle: 'Discover Your True Self',
    description: 'Through scientific MBTI personality testing, gain deep insights into your personality type, strengths, and career development direction.',
    features: {
      scientific: {
        title: 'Scientifically Accurate',
        description: 'Based on Jungian psychology theory and extensive data validation'
      },
      comprehensive: {
        title: 'Comprehensive Analysis',
        description: 'Deep analysis of your personality traits from four dimensions'
      },
      instant: {
        title: 'Instant Results',
        description: 'Get detailed analysis report immediately after completing the test'
      },
      free: {
        title: 'Completely Free',
        description: 'No registration required, permanently free access to all features'
      }
    },
    startButton: 'Start Test',
    learnMore: 'Learn More'
  },
  test: {
    title: 'MBTI Personality Test',
    progress: 'Progress',
    question: 'Question',
    options: {
      stronglyDisagree: 'Strongly Disagree',
      disagree: 'Disagree',
      neutral: 'Neutral',
      agree: 'Agree',
      stronglyAgree: 'Strongly Agree'
    },
    submitTest: 'Submit Test',
    confirmSubmit: 'Are you sure you want to submit the test? You cannot modify answers after submission.',
    backToTest: 'Back to Test'
  },
  result: {
    title: 'MBTI Test Results',
    yourType: 'Your Personality Type',
    dimensionAnalysis: 'Dimension Analysis',
    dimensionDescription: 'The following shows your preference strength in four core dimensions',
    dimensions: {
      energy: 'Energy Orientation',
      information: 'Information Gathering',
      decision: 'Decision Making',
      lifestyle: 'Lifestyle'
    },
    traits: {
      strengths: 'Strengths',
      weaknesses: 'Areas for Growth',
      careers: 'Suitable Careers'
    },
    actions: {
      retakeTest: 'Retake Test',
      downloadResult: 'Download Result',
      shareResult: 'Share Result'
    },
    share: {
      twitter: 'Twitter',
      facebook: 'Facebook',
      copyLink: 'Copy Link',
      shareText: 'My MBTI personality type is {type} ({name})! Come test your personality type!'
    },
    noResult: {
      title: 'No Test Results',
      description: 'You haven\'t completed the MBTI personality test yet. Please complete the test to get results.',
      takeTest: 'Start Test'
    }
  },
  mbti: {
    dimensions: {
      E: 'Extrovert',
      I: 'Introvert',
      S: 'Sensing',
      N: 'Intuition',
      T: 'Thinking',
      F: 'Feeling',
      J: 'Judging',
      P: 'Perceiving'
    },
    fullNames: {
      E: 'Extrovert (E)',
      I: 'Introvert (I)',
      S: 'Sensing (S)',
      N: 'Intuition (N)',
      T: 'Thinking (T)',
      F: 'Feeling (F)',
      J: 'Judging (J)',
      P: 'Perceiving (P)'
    }
  }
};

// 日文翻译
export const jaTranslations: Translations = {
  common: {
    home: 'ホーム',
    test: 'テスト',
    result: '結果',
    start: '開始',
    next: '次へ',
    previous: '前へ',
    submit: '提出',
    retake: '再テスト',
    share: 'シェア',
    download: 'ダウンロード',
    copyLink: 'リンクをコピー',
    loading: '読み込み中...',
    error: 'エラー',
    confirm: '確認',
    cancel: 'キャンセル',
  },
  home: {
    title: 'MBTI 性格診断',
    subtitle: '本当の自分を発見',
    description: '科学的なMBTI性格診断により、あなたの性格タイプ、強み、キャリア開発の方向性を深く理解しましょう。',
    features: {
      scientific: {
        title: '科学的正確性',
        description: 'ユング心理学理論と豊富なデータ検証に基づく'
      },
      comprehensive: {
        title: '包括的分析',
        description: '4つの次元からあなたの性格特性を深く分析'
      },
      instant: {
        title: '即座の結果',
        description: 'テスト完了後すぐに詳細な分析レポートを取得'
      },
      free: {
        title: '完全無料',
        description: '登録不要、すべての機能を永続的に無料で利用'
      }
    },
    startButton: 'テスト開始',
    learnMore: '詳細を見る'
  },
  test: {
    title: 'MBTI 性格診断',
    progress: '進捗',
    question: '質問',
    options: {
      stronglyDisagree: '強く反対',
      disagree: '反対',
      neutral: '中立',
      agree: '賛成',
      stronglyAgree: '強く賛成'
    },
    submitTest: 'テスト提出',
    confirmSubmit: 'テストを提出してもよろしいですか？提出後は回答を変更できません。',
    backToTest: 'テストに戻る'
  },
  result: {
    title: 'MBTI診断結果',
    yourType: 'あなたの性格タイプ',
    dimensionAnalysis: '次元分析',
    dimensionDescription: '以下は4つの核心次元における嗜好の強度を示しています',
    dimensions: {
      energy: 'エネルギーの方向',
      information: '情報収集',
      decision: '意思決定',
      lifestyle: 'ライフスタイル'
    },
    traits: {
      strengths: '強み',
      weaknesses: '注意点',
      careers: '適した職業'
    },
    actions: {
      retakeTest: '再テスト',
      downloadResult: '結果をダウンロード',
      shareResult: '結果をシェア'
    },
    share: {
      twitter: 'Twitter',
      facebook: 'Facebook',
      copyLink: 'リンクをコピー',
      shareText: '私のMBTI性格タイプは{type}（{name}）です！あなたも性格診断をしてみませんか？'
    },
    noResult: {
      title: '診断結果がありません',
      description: 'まだMBTI性格診断を完了していません。まず診断を完了して結果を取得してください。',
      takeTest: '診断開始'
    }
  },
  mbti: {
    dimensions: {
      E: '外向',
      I: '内向',
      S: '感覚',
      N: '直感',
      T: '思考',
      F: '感情',
      J: '判断',
      P: '知覚'
    },
    fullNames: {
      E: '外向 (E)',
      I: '内向 (I)',
      S: '感覚 (S)',
      N: '直感 (N)',
      T: '思考 (T)',
      F: '感情 (F)',
      J: '判断 (J)',
      P: '知覚 (P)'
    }
  }
};

// 语言配置
export const languages: Record<Language, { name: string; flag: string; translations: Translations }> = {
  zh: {
    name: '中文',
    flag: '🇨🇳',
    translations: zhTranslations
  },
  en: {
    name: 'English',
    flag: '🇺🇸',
    translations: enTranslations
  },
  ja: {
    name: '日本語',
    flag: '🇯🇵',
    translations: jaTranslations
  }
};

// 获取当前语言
export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('mbti-language');
    if (saved && saved in languages) {
      return saved as Language;
    }
    
    // 根据浏览器语言设置默认语言
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('ja')) return 'ja';
    return 'en'; // 默认英语
  }
  return 'en';
}

// 设置语言
export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mbti-language', lang);
    // 触发自定义事件通知语言变更
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  }
}

// 获取翻译
export function getTranslations(lang?: Language): Translations {
  const currentLang = lang || getCurrentLanguage();
  return languages[currentLang].translations;
}

// 获取翻译文本的辅助函数
export function t(key: string, lang?: Language, params?: Record<string, string>): string {
  const translations = getTranslations(lang);
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  if (typeof value !== 'string') {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  
  // 替换参数
  if (params) {
    return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
      return params[paramKey] || match;
    });
  }
  
  return value;
}
