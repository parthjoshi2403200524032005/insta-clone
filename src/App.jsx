import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Search from "./pages/Search-Screen";
import Profile from "./pages/Profile-Screen";
import EditProfile from "./pages/Edit-Profile-Screen";
import PostDetails from "./pages/Post-Details-Screen";
import CreatePost from "./pages/Create-Post-Screen";
import Login from "./pages/Login-Screen";
import SignUp from "./pages/Signup-Screen";
import Notification from "./pages/Notifications-Screen";
import './App.css';
import HomeFeed from "./pages/Home-Feed";

const App = () => {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<HomeFeed/>} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/post-details" element={<PostDetails />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  </Router>
);
}
export default App






