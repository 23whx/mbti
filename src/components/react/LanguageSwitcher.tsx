import React, { useState, useEffect } from 'react';

type Language = 'zh-CN' | 'en-US' | 'ja-JP';

const languages = {
  'zh-CN': { name: '中文', flag: '🇨🇳' },
  'en-US': { name: 'English', flag: '🇺🇸' },
  'ja-JP': { name: '日本語', flag: '🇯🇵' }
};

const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en-US');
  const [isOpen, setIsOpen] = useState(false);

  // Get current language from localStorage
  const getCurrentLanguage = (): Language => {
    try {
      const saved = localStorage.getItem('mbti-language');
      if (saved && saved in languages) {
        return saved as Language;
      }
      // Default to English when no saved preference
      return 'en-US';
    } catch {
      return 'en-US';
    }
  };

  // Set language and trigger update
  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem('mbti-language', lang);
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    } catch (error) {
      console.error('Failed to save language preference:', error);
    }
  };

  useEffect(() => {
    setCurrentLang(getCurrentLanguage());
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setCurrentLang(lang);
    setIsOpen(false);
    // 即时触发全局更新（无需整页刷新）
    // BaseLayout 会监听 languageChanged 事件并更新带 data-i18n 的文本
  };

  const currentLanguage = languages[currentLang];

  return (
    <div className="relative">
      {/* 触发按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-lg hover:bg-white hover:border-primary-300 transition-all duration-200 shadow-sm"
        aria-label="Language Switcher"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {currentLanguage.name}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* 菜单内容 */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-primary-200 rounded-lg shadow-lg z-20 overflow-hidden">
            {Object.entries(languages).map(([lang, config]) => (
              <button
                key={lang}
                onClick={() => handleLanguageSelect(lang as Language)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-primary-50 transition-colors duration-150 ${
                  currentLang === lang 
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                    : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{config.flag}</span>
                <span className="font-medium">{config.name}</span>
                {currentLang === lang && (
                  <svg className="w-4 h-4 ml-auto text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
