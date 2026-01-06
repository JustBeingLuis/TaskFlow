import { useState } from "react";
import { useTranslation } from "react-i18next";

function ManualTaskForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({ title, completed });
    setTitle("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          {t("dashboard.modal.taskTitle")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t("dashboard.modal.taskPlaceholder")}
            className="w-full pl-12 pr-4 py-4 text-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-100">
        <label className="flex items-center gap-4 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="w-6 h-6 text-blue-600 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
          <div className="flex-1">
            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
              {t("dashboard.modal.markCompleted")}
            </span>
            <p className="text-xs text-gray-500 mt-0.5">
              {t("dashboard.modal.markCompletedHelp")}
            </p>
          </div>
        </label>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-4 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200"
        >
          {t("dashboard.modal.cancelButton")}
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            {t("dashboard.modal.createButton")}
          </div>
        </button>
      </div>
    </form>
  );
}

export default ManualTaskForm;
