import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-24 h-11 bg-white/80 backdrop-blur-md rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:border-blue-300/50 overflow-hidden group"
      aria-label="Toggle language"
    >
      {/* Background slider */}
      <div
        className={`absolute top-1 bottom-1 w-9 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-400 ease-out ${
          currentLanguage === "en" ? "left-1" : "left-[calc(100%-2.5rem)]"
        }`}
      />

      {/* EN Flag with SVG */}
      <div
        className={`absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center transition-all duration-400 ${
          currentLanguage === "en"
            ? "scale-100 opacity-100"
            : "scale-75 opacity-50"
        }`}
      >
        <svg viewBox="0 0 60 30" className="w-6 h-4">
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath="url(#t)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      </div>

      {/* ES Flag with SVG */}
      <div
        className={`absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center transition-all duration-400 ${
          currentLanguage === "es"
            ? "scale-100 opacity-100"
            : "scale-75 opacity-50"
        }`}
      >
        <svg viewBox="0 0 750 500" className="w-6 h-4">
          <rect width="750" height="500" fill="#c60b1e" />
          <rect width="750" height="250" y="125" fill="#ffc400" />
        </svg>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </button>
  );
}

export default LanguageToggle;
