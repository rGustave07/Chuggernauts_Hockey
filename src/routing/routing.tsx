import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App, Roster, Lines, Schedule } from "../pages";

const Routing = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
				<Route path="/roster" element={<Roster />} />
				<Route path="/lines" element={<Lines />} />
				<Route path="/schedule" element={<Schedule />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
