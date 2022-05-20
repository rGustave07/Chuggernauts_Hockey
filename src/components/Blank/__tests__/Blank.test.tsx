import Blank from '../Blank';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


test('Literally renders nothing, lol', () => {
	const { queryByText } = render(<Blank />);
	expect(queryByText('anything')).not.toBeInTheDocument();
});
