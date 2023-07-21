import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider
        clientId={`391654775188-qfjh8c2895cegng9ngpo6j00g8i5oq60.apps.googleusercontent.com`}
      >
        <Container maxWidth='lg'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/auth' element={<Auth />} />
          </Routes>
        </Container>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
