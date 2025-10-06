import { useUser } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { token } = useUser();
  
  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;