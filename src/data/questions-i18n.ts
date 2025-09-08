// 多语言问题数据
export interface Question {
  id: number;
  category: 'E-I' | 'S-N' | 'T-F' | 'J-P';
  weight: number;
  reverse: boolean;
  text: {
    zh: string;
    en: string;
    ja: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    category: 'E-I',
    weight: 1,
    reverse: false,
    text: {
      zh: '我喜欢与很多人交往，参加聚会和社交活动。',
      en: 'I enjoy interacting with many people and attending parties and social events.',
      ja: '多くの人と交流し、パーティーや社交活動に参加するのが好きです。'
    }
  },
  {
    id: 2,
    category: 'S-N',
    weight: 1,
    reverse: false,
    text: {
      zh: '我更关注具体的事实和细节，而不是抽象的概念。',
      en: 'I focus more on concrete facts and details rather than abstract concepts.',
      ja: '抽象的な概念よりも、具体的な事実や詳細に注目する方です。'
    }
  },
  {
    id: 3,
    category: 'T-F',
    weight: 1,
    reverse: false,
    text: {
      zh: '在做决定时，我更多地依赖逻辑分析而不是个人感受。',
      en: 'When making decisions, I rely more on logical analysis than personal feelings.',
      ja: '決断を下すとき、個人的な感情よりも論理的分析に依存します。'
    }
  },
  {
    id: 4,
    category: 'J-P',
    weight: 1,
    reverse: false,
    text: {
      zh: '我喜欢制定计划并按计划执行，不喜欢临时改变。',
      en: 'I like to make plans and follow them, disliking last-minute changes.',
      ja: '計画を立てて実行するのが好きで、急な変更は好みません。'
    }
  },
  {
    id: 5,
    category: 'E-I',
    weight: 1,
    reverse: true,
    text: {
      zh: '我需要独处的时间来恢复精力和思考问题。',
      en: 'I need alone time to recharge and think through problems.',
      ja: 'エネルギーを回復し、問題を考えるために一人の時間が必要です。'
    }
  },
  {
    id: 6,
    category: 'S-N',
    weight: 1,
    reverse: true,
    text: {
      zh: '我经常思考未来的可能性和潜在的机会。',
      en: 'I often think about future possibilities and potential opportunities.',
      ja: '将来の可能性や潜在的な機会について考えることがよくあります。'
    }
  },
  {
    id: 7,
    category: 'T-F',
    weight: 1,
    reverse: true,
    text: {
      zh: '我在做决定时会考虑对他人感受的影响。',
      en: 'I consider the impact on others\' feelings when making decisions.',
      ja: '決断を下すとき、他人の感情への影響を考慮します。'
    }
  },
  {
    id: 8,
    category: 'J-P',
    weight: 1,
    reverse: true,
    text: {
      zh: '我喜欢保持选择的开放性，适应变化的环境。',
      en: 'I like to keep my options open and adapt to changing environments.',
      ja: '選択肢を開いておき、変化する環境に適応するのが好きです。'
    }
  }
];

// 扩展问题集（用于真实的68题测试）
export const extendedQuestions: Question[] = [
  ...questions,
  // E-I 维度 (额外10题)
  {
    id: 9,
    category: 'E-I',
    weight: 1,
    reverse: false,
    text: {
      zh: '我在团队讨论中经常主动发言表达观点。',
      en: 'I often speak up and express my views in team discussions.',
      ja: 'チームディスカッションでは積極的に発言し、意見を表明します。'
    }
  },
  {
    id: 10,
    category: 'E-I',
    weight: 1,
    reverse: true,
    text: {
      zh: '我更喜欢深入的一对一交流而不是大群体聊天。',
      en: 'I prefer deep one-on-one conversations over large group chats.',
      ja: '大勢でのおしゃべりよりも、一対一の深い会話を好みます。'
    }
  },
  {
    id: 11,
    category: 'E-I',
    weight: 1,
    reverse: false,
    text: {
      zh: '我通过与他人交谈来整理自己的想法。',
      en: 'I organize my thoughts by talking them through with others.',
      ja: '他人と話すことで自分の考えを整理します。'
    }
  },
  {
    id: 12,
    category: 'E-I',
    weight: 1,
    reverse: true,
    text: {
      zh: '我在说话前通常会仔细思考要说什么。',
      en: 'I usually think carefully about what to say before speaking.',
      ja: '話す前に、何を言うかを慎重に考える傾向があります。'
    }
  },
  {
    id: 13,
    category: 'E-I',
    weight: 1,
    reverse: false,
    text: {
      zh: '我喜欢成为关注的焦点，享受被注意的感觉。',
      en: 'I like being the center of attention and enjoy being noticed.',
      ja: '注目の的になることが好きで、注意を向けられることを楽しみます。'
    }
  },
  // S-N 维度 (额外10题)
  {
    id: 14,
    category: 'S-N',
    weight: 1,
    reverse: false,
    text: {
      zh: '我更相信已经证实的方法和经验。',
      en: 'I trust proven methods and experience more.',
      ja: '実証済みの方法と経験をより信頼します。'
    }
  },
  {
    id: 15,
    category: 'S-N',
    weight: 1,
    reverse: true,
    text: {
      zh: '我喜欢探索新的理论和创新的想法。',
      en: 'I enjoy exploring new theories and innovative ideas.',
      ja: '新しい理論や革新的なアイデアを探求するのが好きです。'
    }
  },
  {
    id: 16,
    category: 'S-N',
    weight: 1,
    reverse: false,
    text: {
      zh: '我注重细节，不容易忽略重要信息。',
      en: 'I pay attention to details and rarely miss important information.',
      ja: '細部に注意を払い、重要な情報を見逃すことはほとんどありません。'
    }
  },
  {
    id: 17,
    category: 'S-N',
    weight: 1,
    reverse: true,
    text: {
      zh: '我经常想象各种可能的情况和结果。',
      en: 'I often imagine various possible scenarios and outcomes.',
      ja: 'さまざまな可能性のあるシナリオや結果をよく想像します。'
    }
  },
  {
    id: 18,
    category: 'S-N',
    weight: 1,
    reverse: false,
    text: {
      zh: '我更喜欢处理现实问题而不是理论概念。',
      en: 'I prefer dealing with practical problems rather than theoretical concepts.',
      ja: '理論的概念よりも実際的な問題を扱う方を好みます。'
    }
  },
  // T-F 维度 (额外10题)
  {
    id: 19,
    category: 'T-F',
    weight: 1,
    reverse: false,
    text: {
      zh: '我能够客观地批评他人，即使可能伤害他们的感情。',
      en: 'I can criticize others objectively, even if it might hurt their feelings.',
      ja: '他人の感情を傷つける可能性があっても、客観的に批判することができます。'
    }
  },
  {
    id: 20,
    category: 'T-F',
    weight: 1,
    reverse: true,
    text: {
      zh: '我很容易理解和感同身受他人的情感。',
      en: 'I easily understand and empathize with others\' emotions.',
      ja: '他人の感情を理解し、共感することが容易です。'
    }
  },
  {
    id: 21,
    category: 'T-F',
    weight: 1,
    reverse: false,
    text: {
      zh: '在解决冲突时，我更注重公平而不是和谐。',
      en: 'When resolving conflicts, I focus more on fairness than harmony.',
      ja: '対立を解決する際、調和よりも公平性を重視します。'
    }
  },
  {
    id: 22,
    category: 'T-F',
    weight: 1,
    reverse: true,
    text: {
      zh: '我经常根据个人价值观来做决定。',
      en: 'I often make decisions based on personal values.',
      ja: '個人的価値観に基づいて決定を下すことがよくあります。'
    }
  },
  {
    id: 23,
    category: 'T-F',
    weight: 1,
    reverse: false,
    text: {
      zh: '我认为逻辑和理性比情感更重要。',
      en: 'I believe logic and rationality are more important than emotions.',
      ja: '感情よりも論理と理性の方が重要だと考えています。'
    }
  },
  // J-P 维度 (额外10题)
  {
    id: 24,
    category: 'J-P',
    weight: 1,
    reverse: false,
    text: {
      zh: '我喜欢在截止日期前提前完成任务。',
      en: 'I like to complete tasks well before deadlines.',
      ja: '締切日前に早めにタスクを完了するのが好きです。'
    }
  },
  {
    id: 25,
    category: 'J-P',
    weight: 1,
    reverse: true,
    text: {
      zh: '我在压力下往往能发挥出最好的表现。',
      en: 'I often perform best under pressure.',
      ja: 'プレッシャーの下で最高のパフォーマンスを発揮することがよくあります。'
    }
  },
  {
    id: 26,
    category: 'J-P',
    weight: 1,
    reverse: false,
    text: {
      zh: '我喜欢有序的环境和明确的规则。',
      en: 'I like orderly environments and clear rules.',
      ja: '整然とした環境と明確なルールを好みます。'
    }
  },
  {
    id: 27,
    category: 'J-P',
    weight: 1,
    reverse: true,
    text: {
      zh: '我喜欢同时进行多个项目，保持多样性。',
      en: 'I like working on multiple projects simultaneously to maintain variety.',
      ja: '多様性を保つため、複数のプロジェクトを同時に進めるのが好きです。'
    }
  },
  {
    id: 28,
    category: 'J-P',
    weight: 1,
    reverse: false,
    text: {
      zh: '我认为制定详细计划是成功的关键。',
      en: 'I believe detailed planning is key to success.',
      ja: '詳細な計画を立てることが成功の鍵だと考えています。'
    }
  }
  // 可以继续添加更多问题至68题...
];
