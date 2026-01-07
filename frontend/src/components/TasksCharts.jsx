import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

function TasksCharts({ stats }) {
  const { t } = useTranslation();

  const pieData = [
    {
      name: t("dashboard.charts.completedTasks"),
      value: stats.completed,
      color: "#10b981",
    },
    {
      name: t("dashboard.charts.pendingTasks"),
      value: stats.pending,
      color: "#f59e0b",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Pie Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t("dashboard.charts.tasksDistribution")}
        </h3>
        {stats.total > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-64 flex items-center justify-center text-gray-400">
            {t("dashboard.charts.noData")}
          </div>
        )}
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t("dashboard.charts.progressOverview")}
        </h3>
        <div className="space-y-4 mt-8">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-gray-700">
                {t("dashboard.charts.completionRate")}
              </span>
              <span className="font-semibold text-blue-600">
                {stats.completionRate}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${stats.completionRate}%` }}
              ></div>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-700">
                {t("dashboard.charts.completedTasks")}
              </span>
              <span className="text-lg font-bold text-green-600">
                {stats.completed}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-orange-700">
                {t("dashboard.charts.pendingTasks")}
              </span>
              <span className="text-lg font-bold text-orange-600">
                {stats.pending}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksCharts;
