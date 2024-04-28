import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
	test('Sidebar in document', () => {
		render(<Sidebar/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
});