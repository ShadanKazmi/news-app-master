import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './Components/TopBar';
import Home from './Pages/Home';
import PostCarousel from './Components/PostCarousel';
import SignUp from './Pages/SignUp';
import UserProfile from './Pages/UserProfile';
import Business from './Pages/Business';
import Entertainment from './Pages/Entertainment';
import Sports from './Pages/Sports';
import Science from './Pages/Science';
import Health from './Pages/Health';
import Tech from './Pages/Tech';
import SearchResult from './Components/SearchResult';

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/signup' element = {<SignUp/>}/>
        <Route path="/profile" element={<UserProfile />} />
        <Route path = '/business' element = {<Business/>}/>
        <Route path = '/entertainment' element = {<Entertainment/>}/>
        <Route path = '/sports' element = {<Sports/>}/>
        <Route path = '/science' element = {<Science/>}/>
        <Route path = '/health' element = {<Health/>}/>
        <Route path = '/technology' element = {<Tech/>}/>
        <Route path = '/search' element = {<SearchResult/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
