import { useTranslation } from "react-i18next";

function TaskItem({
  task,
  isEditing,
  editTitle,
  setEditTitle,
  onToggleComplete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onDelete,
}) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
      <button onClick={() => onToggleComplete(task)} className="flex-shrink-0">
        <div
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            task.completed
              ? "bg-blue-600 border-blue-600"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          {task.completed && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </button>

      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSaveEdit(task.id);
              if (e.key === "Escape") onCancelEdit();
            }}
            className="w-full px-2 py-1 text-sm border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <>
            <p
              className={`text-sm font-medium truncate ${
                task.completed ? "line-through text-gray-400" : "text-gray-900"
              }`}
            >
              {task.title}
            </p>
            <p className="text-xs text-gray-400 mt-0.5 font-mono">
              ID: {task.id.substring(0, 8)}
            </p>
          </>
        )}
      </div>

      <div className="flex-shrink-0 flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={() => onSaveEdit(task.id)}
              className="px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-50 rounded-md transition-colors"
            >
              {t("dashboard.taskList.save")}
            </button>
            <button
              onClick={onCancelEdit}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              {t("dashboard.taskList.cancel")}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onStartEdit(task)}
              className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              {t("dashboard.taskList.edit")}
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              {t("dashboard.taskList.delete")}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
