import React from "react";

let previewerList = {
	"audio": React.lazy(() => import("./components/previewers/Audio.jsx")),
	"video": React.lazy(() => import("./components/previewers/Video.jsx")),
	"thumbnail": React.lazy(()=> import("./components/previewers/Thumbnail.jsx"))
}

export default previewerList
