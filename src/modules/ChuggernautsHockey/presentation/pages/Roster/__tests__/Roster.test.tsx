import Roster from "../Roster";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockedUseNavigate = jest.fn();

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("react-router-dom", (): any => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUseNavigate,
}));

describe("<Roster />", () => {
	test("Navigation is rendered and available", () => {
		const { getByText } = render(<Roster />);

		expect(getByText("Roster")).toBeInTheDocument();
		expect(getByText("Lines")).toBeInTheDocument();
		expect(getByText("Schedule")).toBeInTheDocument();
	});
});
