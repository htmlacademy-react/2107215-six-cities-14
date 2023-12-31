import {store} from '../store/index.js';

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
