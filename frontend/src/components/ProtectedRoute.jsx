import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Verificar si hay token en localStorage
  const token = localStorage.getItem("token");

  // Si no hay token, redirigir al login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Si hay token, mostrar el componente hijo
  return children;
}

export default ProtectedRoute;
