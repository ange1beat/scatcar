import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './components/main.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/' element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
