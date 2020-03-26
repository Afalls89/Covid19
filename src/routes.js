import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Cards from "./components/Cards";

import Login from "./components/Login";
import ScrollToTop from "./components/ScrollTop";

export default props => (
	<HashRouter>
		<ScrollToTop>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/cards" component={Cards} />
			</Switch>
		</ScrollToTop>
	</HashRouter>
);
