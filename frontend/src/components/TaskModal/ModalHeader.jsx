import { useTranslation } from "react-i18next";

function ModalHeader({ activeTab, onTabChange, onClose }) {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {t("dashboard.modal.title")}
          </h2>
          <p className="text-blue-100 text-sm">
            {t("dashboard.modal.subtitle")}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => onTabChange("manual")}
          className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            activeTab === "manual"
              ? "bg-white text-blue-600 shadow-lg"
              : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            {t("dashboard.modal.manualTab")}
          </div>
        </button>
        <button
          onClick={() => onTabChange("ai")}
          className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            activeTab === "ai"
              ? "bg-white text-purple-600 shadow-lg"
              : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            {t("dashboard.modal.aiTab")}
          </div>
        </button>
      </div>
    </div>
  );
}

export default ModalHeader;
