import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './view/components/Navigation/Navigation';
import Home from './view/pages/Home/Home';
import Profile from './view/pages/Profile/Profile';
import Tasks from './view/pages/Tasks/Tasks';
import StudyGroups from './view/pages/StudyGroups/StudyGroups';
import HelpSettings from './view/pages/HelpSettings/HelpSettings';
import Admin from './view/pages/Admin/Admin';
import Register from './view/pages/Register/Register';
import './App.css'; // אל תשכח לייבא את App.css

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/studygroups" element={<StudyGroups />} />
          <Route path="/helpsettings" element={<HelpSettings />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
