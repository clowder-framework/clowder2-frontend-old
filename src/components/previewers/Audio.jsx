import React from "react";

export default function Audio(props) {
	const {configuration, ...other} = props;
	return <audio controls><source id={configuration["fileid"]} src={configuration["resource"]} /></audio>
}
