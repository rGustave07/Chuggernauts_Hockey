import App from '../App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Renders the App I guess....', () => {
	const { getByText } = render(<App />);
	expect(getByText('Chuggernauts Hockey')).toBeInTheDocument();
});
