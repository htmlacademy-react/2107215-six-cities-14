import {createAction} from '@reduxjs/toolkit';
import {TAppRoute} from '../types/index';

export const redirectToRoute = createAction<TAppRoute>('redirectToRoute');
