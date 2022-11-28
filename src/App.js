import { Provider } from 'react-redux';
import './App.css';
import SignIn from './pages/Sign-In/SignIn';
import SignUp from './pages/Sign-Up/SignUp';
import Header from './components/header/Header';
import TakeNotes1 from './components/takeNotes1/TakeNotes1';
import TakeNotes2 from './components/takeNotes2/TakeNotes2';
import TakeNotes3 from './components/takeNotes3/TakeNotes3';
import Dashboard from './pages/dashboard/Dashboard';
import store from './components/redux/store'
import HeaderMui from './components/header/HeaderMui';

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <HeaderMui /> */}
      {/* <Header /> */}
      {/* <TakeNotes1 /> */}
      {/* <TakeNotes2 /> */}
      {/* <TakeNotes3 /> */}
      
      <Provider store={store}>
          <Dashboard />
      </Provider>
      </div>
  );
}

export default App;
