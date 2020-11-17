import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthProvider";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <div>
          <MuiThemeProvider theme={THEME}>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
          </MuiThemeProvider>
        </div>
      </Router>
    </AuthProvider>
  );
};

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Kokoro", cursive`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
});

export default App;
