import { useUser } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const { token } = useUser();
  
  return !token ? children : <Navigate to="/" />;
}

export default PublicRoute;