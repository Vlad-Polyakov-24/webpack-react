import { ReducerState } from 'react';
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { type CounterSchema } from 'entities/Counter';


export type StateSchema = {
	counter: CounterSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: Action) => ReducerState<Reducer<StateSchema, Action>>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
};

export type ReduxStoreWithManager = {
	reducerManager: ReducerManager;
} & EnhancedStore<StateSchema>;