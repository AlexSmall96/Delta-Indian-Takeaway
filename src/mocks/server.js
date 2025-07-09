import { setupServer } from 'msw/node';
import { getMap } from './handlers';

export const server = setupServer(getMap);
