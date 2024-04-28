import { type ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export type ComponentRenderOptions = {
	route?: string;
};

const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
	const {
		route = '/',
	} = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			{component}
		</MemoryRouter>,
	);
};

export default ComponentRender;