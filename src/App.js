import './App.css';
import Nav from './components/Nav';
import ContentWrapper from './components/ContentWrapper';
import Footer from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { darkModeSwitch, lightModeSwitch } from './features/modeSlice';

function App() {
  const dispatch = useDispatch();
  const modeState = useSelector((state) => state.mode);
  const { darkMode } = modeState;
  const modeHandler = () => {
    darkMode ? dispatch(lightModeSwitch()) : dispatch(darkModeSwitch())
  }

  return (
    <div style={{ backgroundColor: modeState.color5, color: 'white' }} className="App">
      <Nav />
      <button onClick={modeHandler}>
        { darkMode ? 'Light Mode' : 'Dark Mode' }
      </button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
