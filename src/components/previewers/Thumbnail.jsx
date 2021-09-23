import React from "react";
import { Typography } from "@material-ui/core";

export default function Thumbnail(props){
	const {configuration, ...other} = props;
	return (
		(() => {
			if (configuration["fileType"] === "image/jpeg" || configuration["fileType"] === "image/jpg" || configuration["fileType"] === "image/png"
				|| configuration["fileType"] === "image/gif" || configuration["fileType"] === "image/bmp"){
				return <img className="rubberbandimage" src={configuration["resource"]} alt="img" id={`rubberbandCanvas-${configuration["fileid"]}`}/>;
			}
			else if (configuration["fileType"] === "image/tiff"){
				return <embed alt="No plugin capable of displaying TIFF images was found."
							  width={750} height={550} src={configuration["resource"]} type="image/tiff" negative="no" id="embedded" />;
			}
			else{
				return <Typography>ERROR: Unrecognised image format.</Typography>;
			}

		})()
	)
}
