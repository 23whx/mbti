import type { DimensionType } from '../data/questions';

// 分数接口
export interface Score {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

// 初始化分数
export const initialScore: Score = {
  E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
};

// 计算单题得分 - 对称计分法
export const calculateQuestionScore = (
  dimension: DimensionType,
  value: number
): Partial<Score> => {
  const scores: Partial<Score> = {};
  
  switch (dimension) {
    case 'E':
      scores.E = value;
      scores.I = 6 - value;
      break;
    case 'I':
      scores.I = value;
      scores.E = 6 - value;
      break;
    case 'S':
      scores.S = value;
      scores.N = 6 - value;
      break;
    case 'N':
      scores.N = value;
      scores.S = 6 - value;
      break;
    case 'T':
      scores.T = value;
      scores.F = 6 - value;
      break;
    case 'F':
      scores.F = value;
      scores.T = 6 - value;
      break;
    case 'J':
      scores.J = value;
      scores.P = 6 - value;
      break;
    case 'P':
      scores.P = value;
      scores.J = 6 - value;
      break;
  }
  
  return scores;
};

// 计算最终MBTI类型
export const calculateMBTIType = (scores: Score): string => {
  const type = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');
  
  return type;
};

// 计算维度强度（百分比）
export const calculateDimensionStrength = (scores: Score) => {
  const total_EI = scores.E + scores.I;
  const total_SN = scores.S + scores.N;
  const total_TF = scores.T + scores.F;
  const total_JP = scores.J + scores.P;

  return {
    E: Math.round((scores.E / total_EI) * 100),
    I: Math.round((scores.I / total_EI) * 100),
    S: Math.round((scores.S / total_SN) * 100),
    N: Math.round((scores.N / total_SN) * 100),
    T: Math.round((scores.T / total_TF) * 100),
    F: Math.round((scores.F / total_TF) * 100),
    J: Math.round((scores.J / total_JP) * 100),
    P: Math.round((scores.P / total_JP) * 100),
  };
};

// MBTI类型描述
export const mbtiDescriptions: Record<string, {
  name: string;
  nickname: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
}> = {
  'INTJ': {
    name: '建筑师',
    nickname: '策略家',
    description: '富有想像力和战略能力的创新者，一切皆在计划之中。',
    strengths: ['独立思考', '战略规划', '高效执行', '创新能力'],
    weaknesses: ['过分批判', '对细节不耐烦', '情感表达困难'],
    careers: ['科学家', '工程师', '建筑师', '管理顾问', '系统分析师']
  },
  'INTP': {
    name: '思想家',
    nickname: '逻辑学家',
    description: '具有创造力的思想家，对知识有着止不住的渴望。',
    strengths: ['逻辑思维', '理论创新', '客观分析', '学习能力'],
    weaknesses: ['拖延倾向', '社交困难', '实践能力不足'],
    careers: ['研究员', '程序员', '哲学家', '数学家', '理论物理学家']
  },
  'ENTJ': {
    name: '指挥官',
    nickname: '统帅',
    description: '大胆、富有想像力且意志强大的领导者，总能创造奇迹。',
    strengths: ['领导能力', '战略思维', '决策果断', '目标导向'],
    weaknesses: ['过于强势', '忽视情感', '缺乏耐心'],
    careers: ['CEO', '企业家', '投资银行家', '管理咨询师', '律师']
  },
  'ENTP': {
    name: '辩论家',
    nickname: '发明家',
    description: '聪明好奇的发明者，不会放弃任何智力上的挑战。',
    strengths: ['创新思维', '适应能力', '沟通技巧', '学习速度'],
    weaknesses: ['注意力分散', '完成困难', '规则抗拒'],
    careers: ['企业家', '营销经理', '记者', '咨询师', '发明家']
  },
  'INFJ': {
    name: '提倡者',
    nickname: '先知',
    description: '安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。',
    strengths: ['洞察人心', '理想主义', '坚持不懈', '创造力'],
    weaknesses: ['过度敏感', '完美主义', '容易倦怠'],
    careers: ['心理咨询师', '作家', '教师', '社会工作者', '艺术家']
  },
  'INFP': {
    name: '调停者',
    nickname: '理想主义者',
    description: '诗意、善良的利他主义者，总是热情地提供帮助。',
    strengths: ['同理心', '创造力', '适应能力', '价值驱动'],
    weaknesses: ['过度理想化', '决策困难', '自我批判'],
    careers: ['作家', '心理学家', '艺术家', '记者', '社会工作者']
  },
  'ENFJ': {
    name: '主人公',
    nickname: '教师',
    description: '富有魅力且鼓舞人心的领导者，拥有使听众信服的能力。',
    strengths: ['领导魅力', '沟通能力', '同理心', '激励他人'],
    weaknesses: ['过度理想化', '自我牺牲', '决策犹豫'],
    careers: ['教师', '培训师', '心理咨询师', 'HR经理', '政治家']
  },
  'ENFP': {
    name: '竞选者',
    nickname: '激励者',
    description: '热情、有创造力且善于社交，总能找到理由微笑。',
    strengths: ['热情感染', '创新能力', '沟通技巧', '适应性强'],
    weaknesses: ['注意力分散', '情绪波动', '规划困难'],
    careers: ['销售员', '记者', '演员', '企业家', '培训师']
  },
  'ISTJ': {
    name: '物流师',
    nickname: '检查员',
    description: '实际且稳重的守护者，所有事情都井井有条。',
    strengths: ['责任感强', '组织能力', '可靠稳定', '细致认真'],
    weaknesses: ['抗拒变化', '过于严肃', '缺乏灵活性'],
    careers: ['会计师', '银行家', '审计师', '工程师', '法官']
  },
  'ISFJ': {
    name: '守护者',
    nickname: '保护者',
    description: '利他主义的保护者，对他们关心的人和事物非常忠诚。',
    strengths: ['服务精神', '细心体贴', '忠诚可靠', '实用主义'],
    weaknesses: ['自我牺牲', '抗拒冲突', '变化困难'],
    careers: ['护士', '教师', '社会工作者', '图书管理员', '人事专员']
  },
  'ESTJ': {
    name: '总经理',
    nickname: '管理者',
    description: '出色的管理者，在管理人事和事务方面无与伦比。',
    strengths: ['组织能力', '执行力强', '责任心', '目标导向'],
    weaknesses: ['固执己见', '缺乏灵活性', '忽视情感'],
    careers: ['经理', '行政人员', '法官', '军官', '银行家']
  },
  'ESFJ': {
    name: '执政官',
    nickname: '供应者',
    description: '热心、有责任心且受人喜爱，总是积极参与身边的一切事务。',
    strengths: ['人际关系', '责任感', '合作精神', '组织能力'],
    weaknesses: ['过度在意他人看法', '抗拒批评', '变化困难'],
    careers: ['销售代表', '护士', '教师', '人事经理', '活动策划']
  },
  'ISTP': {
    name: '鉴赏家',
    nickname: '工匠',
    description: '灵活且容忍度高的实验家，对各种工具都有极高的熟练度。',
    strengths: ['实践能力', '适应性强', '冷静理性', '问题解决'],
    weaknesses: ['情感表达困难', '长期规划不足', '团队合作困难'],
    careers: ['机械师', '工程师', '飞行员', '程序员', '外科医生']
  },
  'ISFP': {
    name: '探险家',
    nickname: '艺术家',
    description: '灵活且有魅力的艺术家，时刻准备去探索新的体验。',
    strengths: ['艺术感觉', '适应能力', '温和友善', '价值观坚定'],
    weaknesses: ['竞争力不足', '规划困难', '自信心不足'],
    careers: ['艺术家', '设计师', '音乐家', '摄影师', '心理咨询师']
  },
  'ESTP': {
    name: '企业家',
    nickname: '实用主义者',
    description: '聪明、精力充沛且有魅力的人，喜欢享受当下的乐趣。',
    strengths: ['行动力强', '适应能力', '沟通技巧', '现实感强'],
    weaknesses: ['缺乏长远规划', '冲动行事', '理论学习困难'],
    careers: ['销售员', '企业家', '运动员', '演员', '警察']
  },
  'ESFP': {
    name: '表演者',
    nickname: '娱乐者',
    description: '热情、友好且受人喜爱的人，总能发现生活中的乐趣。',
    strengths: ['热情感染', '人际关系', '适应能力', '实用主义'],
    weaknesses: ['规划能力不足', '容易分心', '抗拒批评'],
    careers: ['演员', '销售员', '教师', '社会工作者', '活动策划']
  }
};
