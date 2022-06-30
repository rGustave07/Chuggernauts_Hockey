import App from "../App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockedUseNavigate = jest.fn();

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("react-router-dom", (): any => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUseNavigate,
}));

test("Renders the App I guess....", () => {
	const { getByText } = render(<App />);
	expect(getByText("Chuggernauts Hockey")).toBeInTheDocument();
});
