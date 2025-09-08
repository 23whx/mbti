import React from 'react';
import { calculateDimensionStrength, type Score } from '../../utils/scoring';

interface ResultChartProps {
  scores: Score;
  mbtiType: string;
}

const ResultChart: React.FC<ResultChartProps> = ({ scores, mbtiType }) => {
  const strengths = calculateDimensionStrength(scores);
  
  const dimensions = [
    {
      name: '能量导向',
      pair: ['外向 (E)', '内向 (I)'],
      values: [strengths.E, strengths.I],
      colors: ['bg-primary-500', 'bg-secondary-500'],
      result: mbtiType[0]
    },
    {
      name: '信息获取',
      pair: ['感觉 (S)', '直觉 (N)'],
      values: [strengths.S, strengths.N],
      colors: ['bg-primary-500', 'bg-secondary-500'],
      result: mbtiType[1]
    },
    {
      name: '决策方式',
      pair: ['思考 (T)', '情感 (F)'],
      values: [strengths.T, strengths.F],
      colors: ['bg-primary-500', 'bg-secondary-500'],
      result: mbtiType[2]
    },
    {
      name: '生活方式',
      pair: ['判断 (J)', '知觉 (P)'],
      values: [strengths.J, strengths.P],
      colors: ['bg-primary-500', 'bg-secondary-500'],
      result: mbtiType[3]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">维度分析</h3>
        <p className="text-gray-600">
          以下图表显示了您在四个核心维度上的偏好强度
        </p>
      </div>
      
      {dimensions.map((dimension, index) => (
        <div key={index} className="dimension-card">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              {dimension.name}
              <span className={`ml-3 px-3 py-1 rounded-full text-sm font-bold text-white ${
                ['E', 'S', 'T', 'J'].includes(dimension.result) 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600' 
                  : 'bg-gradient-to-r from-secondary-500 to-secondary-600'
              }`}>
                {dimension.result}
              </span>
            </h4>
          </div>
          
          {/* 对比条形图 */}
          <div className="space-y-4">
            {dimension.pair.map((label, pairIndex) => {
              const value = dimension.values[pairIndex];
              // const isStronger = value > 50;
              const isResult = label.includes(dimension.result);
              
              return (
                <div key={pairIndex} className="flex items-center space-x-4">
                  <div className="w-20 text-sm font-medium text-gray-700 text-right">
                    {label}
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          isResult 
                            ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
                            : 'bg-gray-300'
                        }`}
                        style={{ 
                          width: `${value}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        {/* 进度条内的光泽效果 */}
                        {isResult && (
                          <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        )}
                      </div>
                    </div>
                    
                    {/* 百分比标签 */}
                    <div className="absolute right-0 -top-6 text-xs font-semibold text-gray-600">
                      {value}%
                    </div>
                  </div>
                  
                  {/* 强度指示器 */}
                  <div className="w-16 text-xs text-gray-500">
                    {value > 70 && '很强'}
                    {value > 55 && value <= 70 && '较强'}
                    {value >= 45 && value <= 55 && '平衡'}
                    {value < 45 && '较弱'}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* 维度解释 */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              {index === 0 && `您倾向于${dimension.result === 'E' ? '从外部世界获取能量，喜欢与人交流互动' : '从内心世界获取能量，享受独处和深度思考'}`}
              {index === 1 && `您倾向于${dimension.result === 'S' ? '关注具体事实和细节，重视实际经验' : '关注整体概念和可能性，重视直觉洞察'}`}
              {index === 2 && `您倾向于${dimension.result === 'T' ? '基于逻辑和客观分析做决定' : '基于价值观和他人感受做决定'}`}
              {index === 3 && `您倾向于${dimension.result === 'J' ? '喜欢有计划、有条理的生活方式' : '喜欢灵活、开放的生活方式'}`}
            </p>
          </div>
        </div>
      ))}
      
      {/* 整体平衡性分析 */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          性格平衡性分析
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-sm font-medium text-gray-900 mb-2">显著特征</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              {dimensions.map((dim, idx) => {
                const maxValue = Math.max(...dim.values);
                if (maxValue > 65) {
                  const strongSide = dim.values[0] > dim.values[1] ? dim.pair[0] : dim.pair[1];
                  return (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                      {strongSide.split(' (')[0]} 倾向明显 ({maxValue}%)
                    </li>
                  );
                }
                return null;
              }).filter(Boolean)}
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm font-medium text-gray-900 mb-2">平衡特征</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              {dimensions.map((dim, idx) => {
                const diff = Math.abs(dim.values[0] - dim.values[1]);
                if (diff <= 20) {
                  return (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></div>
                      {dim.name} 相对平衡
                    </li>
                  );
                }
                return null;
              }).filter(Boolean)}
              {dimensions.every(dim => Math.abs(dim.values[0] - dim.values[1]) > 20) && (
                <li className="flex items-center text-gray-500">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  各维度偏好明确
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
