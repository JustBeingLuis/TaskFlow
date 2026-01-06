import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import api from "../services/api";
import LanguageToggle from "../components/LanguageToggle";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isRegister) {
        await api.register(email, password);
        await api.login(email, password);
      } else {
        await api.login(email, password);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Error en la autenticación");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 animate-fadeIn relative overflow-hidden">
      {/* Language Toggle - Fixed position */}
      <div className="fixed top-6 right-6 z-50 animate-slideInRight">
        <LanguageToggle />
      </div>

      {/* Sistema avanzado de partículas y efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Capas de fondo con gradientes animados */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-transparent rounded-full blur-3xl animate-driftReverse"></div>
          <div
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-300/15 to-transparent rounded-full blur-3xl animate-drift"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>

        {/* Círculos flotantes grandes */}
        <div className="absolute top-10 right-1/4 w-32 h-32 border-2 border-blue-200/30 rounded-full animate-floatCircular"></div>
        <div
          className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-indigo-200/30 rounded-full animate-floatCircular"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-10 w-40 h-40 border border-purple-200/20 rounded-full animate-floatDiagonal"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Formas geométricas flotantes */}
        <div className="absolute top-40 left-20 w-16 h-16 border-2 border-blue-300/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-32 w-12 h-12 border-2 border-indigo-300/20 rotate-12 animate-spin-reverse"></div>
        <div
          className="absolute top-2/3 left-1/3 w-20 h-20 border border-purple-300/15 rotate-45 animate-floatDiagonal"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Partículas pequeñas con movimiento complejo */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-twinkle"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-twinkle"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-twinkle"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-twinkle"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/2 w-2 h-2 bg-indigo-300 rounded-full animate-twinkle"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-twinkle"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/5 w-2 h-2 bg-purple-300 rounded-full animate-twinkle"
          style={{ animationDelay: "3.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-twinkle"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Líneas decorativas flotantes */}
        <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-drift"></div>
        <div
          className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent animate-driftReverse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-56 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent animate-drift"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Círculos pulsantes adicionales */}
        <div className="absolute top-14 right-1/3 w-4 h-4 bg-blue-400/40 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute bottom-24 left-1/3 w-3 h-3 bg-indigo-400/40 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/5 w-4 h-4 bg-purple-400/40 rounded-full animate-pulse-slow"
          style={{ animationDelay: "2.4s" }}
        ></div>

        {/* Efectos de resplandor flotantes */}
        <div
          className="absolute top-1/5 right-1/5 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/5 w-56 h-56 bg-indigo-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col justify-center space-y-8 p-12 animate-slideInLeft">
          {/* Logo animado */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300 animate-glow">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient group-hover:scale-105 transition-transform duration-300">
                TaskFlow
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              {i18n.language === "en"
                ? "Your intelligent task management solution"
                : "Tu solución inteligente de gestión de tareas"}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div
              className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300 cursor-pointer group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300"
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
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {t("login.features.ai.title")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("login.features.ai.description")}
                </p>
              </div>
            </div>

            <div
              className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300 cursor-pointer group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {t("login.features.analytics.title")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("login.features.analytics.description")}
                </p>
              </div>
            </div>

            <div
              className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300 cursor-pointer group"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {t("login.features.secure.title")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("login.features.secure.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex space-x-2">
            <div
              className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full animate-pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-transparent rounded-full animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-16 h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="relative animate-slideInRight">
          {/* Glass card */}
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-shadow duration-300">
            {/* Logo mobile */}
            <div className="md:hidden flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t("login.brandName")}
              </h1>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isRegister ? t("login.titleRegister") : t("login.title")}
              </h2>
              <p className="text-gray-600">
                {isRegister ? t("login.subtitleRegister") : t("login.subtitle")}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  {t("login.email")}
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
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white focus:scale-[1.01] outline-none transition-all duration-200 hover:border-gray-300 hover:bg-white"
                    placeholder={t("login.emailPlaceholder")}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  {t("login.password")}
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white focus:scale-[1.01] outline-none transition-all duration-200 hover:border-gray-300 hover:bg-white"
                    placeholder={t("login.passwordPlaceholder")}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-shake">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {t("login.processing")}
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      {isRegister ? t("login.signUp") : t("login.signIn")}
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  )}
                </span>
              </button>
            </form>

            {/* Toggle */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isRegister
                  ? t("login.toggleQuestionRegister")
                  : t("login.toggleQuestion")}{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsRegister(!isRegister);
                    setError("");
                  }}
                  className="font-semibold text-blue-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 hover:after:w-full after:transition-all after:duration-300"
                >
                  {isRegister
                    ? t("login.toggleLinkRegister")
                    : t("login.toggleLink")}
                </button>
              </p>
            </div>

            {/* Decorative footer */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-center text-gray-500">
                {t("login.security")}
              </p>
            </div>
          </div>

          {/* Floating decorations */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-2xl animate-float"></div>
          <div
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-20 blur-2xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 -right-8 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-15 blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
