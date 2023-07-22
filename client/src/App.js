import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = localStorage.getItem("memoryprofile");

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Container maxWidth='xl'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Navigate to='/posts' />} />
            <Route exact path='/posts' element={<Home />} />
            <Route exact path='/posts/search' element={<Home />} />
            <Route exact path='/posts/:id' element={<PostDetails />} />
            <Route
              exact
              path='/auth'
              element={!user ? <Auth /> : <Navigate to='/posts' />}
            />
          </Routes>
        </Container>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
