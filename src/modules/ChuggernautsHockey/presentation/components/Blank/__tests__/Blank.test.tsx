import Blank from "../Blank";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockedUseNavigate = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("react-router-dom", (): any => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUseNavigate,
}));

test("Literally renders nothing, lol", () => {
	const { queryByText } = render(<Blank />);
	expect(queryByText("anything")).not.toBeInTheDocument();
});
