import React from "react";

export default function Video(props) {
	const {configuration, ...others} = props;
	return (<video width='100%' id='ourvideo' controls>
		<source id={configuration["fileid"]} src={configuration["resource"]}></source>
	</video>);
}
