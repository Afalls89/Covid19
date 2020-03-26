import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import Back from "./common/Back";
// import withFirebaseAuth from "react-with-firebase-auth";
import profileData from "./FetchProfileData";

// const qs = require("query-string");
const backgroundShape = require("../images/shape.svg");

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.primary["A100"],
		overflow: "hidden",
		background: `url(${backgroundShape}) no-repeat`,
		backgroundSize: "cover",
		backgroundPosition: "0 400px",
		marginTop: 10,
		padding: 20,
		paddingBottom: 200
	},
	grid: {
		margin: `0 ${theme.spacing(2)}px`
	},
	smallContainer: {
		width: "60%"
	},
	bigContainer: {
		width: "80%"
	},
	stepContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	stepGrid: {
		width: "80%"
	},
	backButton: {
		marginRight: theme.spacing(1)
	},
	outlinedButtom: {
		textTransform: "uppercase",
		margin: theme.spacing(1)
	},
	stepper: {
		backgroundColor: "transparent"
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: "left",
		color: theme.palette.text.secondary
	},
	topInfo: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 42
	},
	formControl: {
		width: "100%"
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	borderColumn: {
		borderBottom: `1px solid ${theme.palette.grey["100"]}`,
		paddingBottom: 24,
		marginBottom: 24
	},
	flexBar: {
		marginTop: 32,
		display: "flex",
		justifyContent: "center"
	}
});

const getSteps = () => {
	return ["Profile"];
};

class Profile extends Component {
	state = {
		activeStep: 0,
		receivingAccount: "Home Account",
		repaimentAccount: "Saving Account",
		termsChecked: false,
		labelWidth: 0,
		profileData: {
			displayName: "not available",
			email: "not available",
			emailVerified: "not available",
			photoURL: "not available",
			isAnonymous: "not available",
			uid: "not available",
			providerData: "not available"
		}
	};

	componentDidMount() {
		console.log(profileData.email, ">>>>>>>>><<<<<<<<<<<<<<<<<");
		if (profileData.email !== undefined) {
			this.setState(currentState => {
				return {
					...currentState,
					profileData: this.props.profileData
				};
			});
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	goToDashboard = event => {
		const queryString = this.props.location.search;

		this.props.history.push({
			pathname: "/dashboard",
			search: queryString
		});
	};

	render() {
		const { classes } = this.props;
		// const queryString = this.props.location.search;
		// const parsed = queryString ? qs.parse(queryString) : {};
		const steps = getSteps();
		const { activeStep } = this.state;

		return (
			<React.Fragment>
				<CssBaseline />
				<div className={classes.root}>
					<Grid container justify="center">
						<Grid
							spacing={10}
							alignItems="center"
							justify="center"
							container
							className={classes.grid}
						>
							<Grid item xs={12}>
								<Back />
								<div className={classes.stepContainer}>
									<div className={classes.bigContainer}>
										<Stepper
											classes={{ root: classes.stepper }}
											activeStep={activeStep}
											alternativeLabel
										>
											{steps.map(label => {
												return (
													<Step key={label}>
														<StepLabel>{label}</StepLabel>
													</Step>
												);
											})}
										</Stepper>
									</div>
									{activeStep === 0 && (
										<div className={classes.bigContainer}>
											<Paper className={classes.paper}>
												<div className={classes.topInfo}>
													<div>
														<Typography
															variant="subtitle1"
															style={{ fontWeight: "bold" }}
															gutterBottom
														>
															Information
														</Typography>
														<Typography variant="body1" gutterBottom>
															General information about your account
														</Typography>
													</div>
													{/* <div>
														<Button
															variant="outlined"
															size="large"
															className={classes.outlinedButtom}
														>
															Edit
														</Button>
													</div> */}
												</div>
												<Grid item container xs={12}>
													<Grid item xs={6}>
														<Typography
															style={{ textTransform: "uppercase" }}
															color="secondary"
															gutterBottom
														>
															User
														</Typography>
														<Typography variant="h5" gutterBottom>
															{this.state.profileData.displayName}
														</Typography>
													</Grid>
													<Grid item xs={6}>
														<Typography
															style={{ textTransform: "uppercase" }}
															color="secondary"
															gutterBottom
														>
															Email
														</Typography>
														<Typography variant="h5" gutterBottom>
															{this.state.profileData.email}
														</Typography>
													</Grid>
												</Grid>
											</Paper>
										</div>
									)}
								</div>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(withStyles(styles)(Profile));
