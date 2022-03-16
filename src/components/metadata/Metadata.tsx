import React, {useEffect, useState} from "react";
import {Time} from "./Time";
import {AlternativeTitle} from "./AlternativeTitle";
import {Unit} from "./Unit";

export const Metadata = () => {
	return (
		<>
			<Time />
			<AlternativeTitle />
			<Unit />
		</>
	)
}
