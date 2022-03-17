import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {CreateDatasetModal} from "./CreateDatasetModal";
import {Metadata} from "../metadata/Metadata";
import {UploadFile} from "../files/UploadFile";

const steps = [
	{
		label: "Create Dataset",
		description: "",
		component: <CreateDatasetModal />
	},
	{
		label: "Fill in Metadata",
		description: "",
		component: <Metadata />
	},
	{
		label: "Create Folders",
		description: "Users can create folders and subfolders inside dataset to help with file management.",
		component: <></>
	},
	{
		label: "Attach Files",
		description: "",
		component: <UploadFile />
	},
];

export const CreateDataset = () => {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	return (
		<Box sx={{ maxWidth: 400 }}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							optional={
								index === steps.length -1 ? (
									<Typography variant="caption">Last step</Typography>
								) : null
							}
						>
							{step.label}
						</StepLabel>
						<StepContent>
							<Typography>{step.description}</Typography>
							<Box>
								{step.component}
							</Box>
							{/*buttons*/}
							<Box sx={{ mb: 2 }}>
								<div>
									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}
									>
										{index === steps.length - 1 ? "Finish" : "Continue"}
									</Button>

									{
										index === steps.length -1 || index === 0?
											null
											:
											<Button
												disabled={index === steps.length -1}
												onClick={handleSkip}
												sx={{ mt: 1, mr: 1 }}
											>
												Skip
											</Button>
									}
									{
										index === 0 ?
											null
											:
											<Button
												disabled={index === 0}
												onClick={handleBack}
												sx={{ mt: 1, mr: 1 }}
											>
												Back
											</Button>
									}
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}
