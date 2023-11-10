import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './components/AppRoutes/AppRoutes.jsx';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
