
import Routes from './routes';
import { useNavigate, useLocation} from 'react-router-dom';


export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const verifyUrl = (location: any) => {
    if (location.pathname !== '/') return true;
    return false
  }

  return (
    <div>
      { verifyUrl(location) &&
        <button onClick={() => navigate(-1)}>Go back</button>
      }
      <Routes />
    </div>
  );
}