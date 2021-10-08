import React from "react";

// GET the config

// reference to the buddle

// import the buddle
let previewerList = {
	"audio": React.lazy(() => import("dist/0.179e97826b3ea9652c81.js")),
	"video": React.lazy(() => import("./components/previewers/Video.jsx")),
	"thumbnail": React.lazy(()=> import("./components/previewers/Thumbnail.jsx"))
}

export default previewerList
