import './App.css';
import LocalProvider from './context/Context'
import Routes from './routes/routes'


function App() {
  return (
    <>
    <LocalProvider>
        <Routes/>
    </LocalProvider>
  </>
  );
}

export default App;