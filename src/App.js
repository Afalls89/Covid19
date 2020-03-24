import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";
import { blue, indigo } from "@material-ui/core/colors";
// import withFirebaseAuth from "react-with-firebase-auth";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebaseConfig";

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
// 	googleProvider: new firebase.auth.GoogleAuthProvider()
// };

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: blue[900]
		},
		primary: {
			main: indigo[700]
		}
	},
	typography: {
		// Use the system font instead of the default Roboto font.
		fontFamily: ['"Lato"', "sans-serif"].join(",")
	}
});

class App extends Component {
	render() {
		return (
			<div className="App">
				<ThemeProvider theme={theme}>
					<Routes />
				</ThemeProvider>
			</div>
		);
	}
}

export default App;
