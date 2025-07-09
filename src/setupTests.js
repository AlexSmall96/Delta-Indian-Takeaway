import { server } from './mocks/server'
import { afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup  } from '@testing-library/react';

const setupTests = () => {
    beforeAll(() => {
        server.listen()
    })

    afterEach(() => {
        cleanup()
    })
      
    afterAll(() => {
        server.close()
    })
}

export default setupTests