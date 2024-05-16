import { type PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import type { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

type DynamicModuleLoaderProps = {
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
} & PropsWithChildren;

const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const { children, reducers, removeAfterUnmount } = props;
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name);
				});
			}
		};
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{ children }
		</>
	);
};

export default DynamicModuleLoader;
