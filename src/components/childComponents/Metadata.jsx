import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Accordion, Box, AccordionDetails ,AccordionSummary , Typography, Link} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		padding:"50px"
	},
	title:{

	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0,
		wordBreak: "break-all"
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
		wordBreak: "break-all"
	},
}));

export default function Metadata(props) {
	const classes = useStyles();
	const {jsonld, ...others} = props;
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box className={classes.root}>
			<Typography>Extracted by <Link href={jsonld["agent"]["extractor_id"]}>{jsonld["agent"]["name"]}
			</Link> on {jsonld["created_at"]}</Typography>
			{
				Object.keys(jsonld["content"]).map((key, index) => {
					return (
							<Accordion expanded={expanded === `panel-${index.toString()}`}
									   onChange={handleChange(`panel-${index.toString()}`)}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls={`panel-${index.toString()}-bh-content`}
									id={`panel-${index.toString()}-bh-header`}
								>
									<Typography className={classes.heading}>{key}</Typography>
									<Typography className={classes.secondaryHeading}>
										{JSON.stringify(jsonld["content"][key])}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										action to show more information and delete
									</Typography>
								</AccordionDetails>
							</Accordion>
					);
				})
			}
		</Box>
	);
}
