import App from "../App";
import { render } from "@testing-library/react";
import { test, expect } from "vitest";

test("Renders the App I guess....", () => {
	const { getByText } = render(<App />);
	expect(getByText("Chuggernauts Hockey")).not.toBe(null);
});
