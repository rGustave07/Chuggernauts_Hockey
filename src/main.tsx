import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import "./index.css";

let rootAnchor: HTMLElement | null;

if (document.getElementById("root")) {
	rootAnchor = document.getElementById("root");
} else {
	rootAnchor = document.createElement("div");
	const errorContent = document.createTextNode(
		"Error retrieving root HTML anchor"
	);

	rootAnchor.appendChild(errorContent);
}

ReactDOM.createRoot(rootAnchor as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
