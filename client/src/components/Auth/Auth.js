import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setIsSignUp(!isSignup);
  };

  const googleSuccess = async (res) => {
    const result = jwt_decode(res.credential);
    const token = res.credential;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("Google sign in was unsuccessful. Please try again later.");
    console.log(error);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label='Confirm Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <span className={classes.googleButton}>
            <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />
          </span>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {!isSignup
                  ? "Don't have an account? Sign Up"
                  : "Already have an account. Sign In"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
