import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

function DashboardHeader() {
  const { t } = useTranslation();

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">
          {t("dashboard.welcomeBack")}! {t("dashboard.readyToWork")}
        </p>
      </div>
      <LanguageToggle />
    </header>
  );
}

export default DashboardHeader;
