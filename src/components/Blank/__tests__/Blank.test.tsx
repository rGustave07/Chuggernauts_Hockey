import Blank from "../Blank";
import { render } from "@testing-library/react";

test("Literally renders nothing, lol", () => {
	const { queryByText } = render(<Blank />);
	expect(queryByText("anything")).toBe(null);
});
