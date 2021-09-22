import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
	Accordion,
	Box,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Link,
	FormControlLabel
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteMetadata} from "../../utils/metadata";
import config from "../../app.config";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "50px"
	},
	title: {},
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
	const {jsonld, resourceType, resourceId, listMetadataJsonld, ...others} = props;
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box className={classes.root}>
			{jsonld.map((item, index) => {
				return (
					<Accordion onChange={handleChange(`panel-${index.toString()}`)}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon/>}
							aria-controls={`panel-${index.toString()}-bh-content`}
							id={`panel-${index.toString()}-bh-header`}
						>
							<FormControlLabel
								aria-label="Delete"
								onClick={async (event) => {
									event.stopPropagation();

									let extractorId = item["agent"]["extractor_id"].replace(/.*extractors\//g, "");
									const status = await deleteMetadata(resourceType, resourceId, extractorId);
									if (status === 200){ listMetadataJsonld(resourceId); }
								}}
								onFocus={(event) => event.stopPropagation()}
								control={<DeleteIcon />}
								style={{"marginLeft": "0"}}
								label={<Typography style={{"wordBreak":"break-all"}}>Extracted by <Link
									href={item["agent"]["extractor_id"]}>{item["agent"]["name"]}</Link>
									&nbsp;on {item["created_at"]}</Typography>}
							/>

						</AccordionSummary>
						{
							Object.keys(item["content"]).map((key, index) => {
								return (
									<AccordionDetails>
										<Typography className={classes.heading}>{key}</Typography>
										<Typography className={classes.secondaryHeading}>
											{JSON.stringify(item["content"][key])}</Typography>
									</AccordionDetails>
								);
							})
						}
					</Accordion>
				)
			})
			}
		</Box>
	);
}
