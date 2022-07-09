import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './signIn';
import Home from './Home';
import Main from './Main';
import { AuthContextProvider } from './context/AuthContext';

function App() {

  return (
    <div className='App'>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/main' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
