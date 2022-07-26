import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
        <div className='container'>
          <Search/>
          <AppRouter />
        </div>
    </BrowserRouter>
  );
}

export default App;
