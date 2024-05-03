import { type ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export type ComponentRenderOptions = {
	route?: string;
	initialState?: StateSchema;
};

const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
	const {
		route = '/',
		initialState,
	} = options;

	return render(
		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				{component}
			</MemoryRouter>
		</StoreProvider>,
	);
};

export default ComponentRender;