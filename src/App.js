import './App.css';
import SignIn from './pages/Sign-In/SignIn';
import SignUp from './pages/Sign-Up/SignUp';
import Header from './components/header/Header';
import TakeNotes1 from './components/takeNotes1/TakeNotes1';

function App() {
  return (
    <div>
      {/* <SignIn />
      <SignUp /> */}
      <Header />
      <TakeNotes1 />
      </div>
  );
}

export default App;
