import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

//node_modules/react-router-dom/index"
import { BrowserRouter , useNavigate,Route,Routes } from "react-router-dom";

import Navbar from './components/General/Navbar';
import Navbar2 from './components/General/Navbar2';
import Footer from './components/General/Footer';
import Home from './components/Home/Home';
import LiveScoreCard from './components/scorecard/LiveScoreCard';
import PointsTable from './components/General/PointsTable';
import Login from './components/General/Login';
import CurrentMatches from './components/MatchesAndSeries/CurrentMatches';
import Series from './components/MatchesAndSeries/Series';
import MatchesByDay from './components/MatchesAndSeries/MatchesByDay';
import Teams from './components/MatchesAndSeries/Teams';
import Archeives from './components/MatchesAndSeries/Archeives';
import News from './components/News/News';
import Profile from './components/General/Profile';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Navbar2/>
    <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/live-cricket-scorecard/*' element={<LiveScoreCard/>} />  
          <Route path='/premium-subscription/user/login' element={<Login/>} />  
          <Route path='/cricket-match/live-scores' element={<CurrentMatches/>} /> 
          <Route path='/cricket-schedule/series' element={<Series/>} /> 
          <Route path='/cricket-schedule/upcoming-series/' element={<MatchesByDay/>} /> 
          <Route path='/cricket-team' element={<Teams/>} /> 
          <Route path='/cricket-scorecard-archives' element={<Archeives/>} /> 
          <Route path='/cricket-news/*' element={<News/>} /> 
          <Route path='//profiles/8733/rahul' element={<Profile/>} /> 
 
     </Routes>
     <Footer/>
     </div>
     </BrowserRouter>
  );
}

export default App;
