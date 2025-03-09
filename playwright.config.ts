import {defineConfig} from '@playwright/test';
import { trace } from 'console';

export default defineConfig({
    testDir: 'e2etests', 
    timeout: 30000,
    retries: 2,
    use: {
        headless: true,
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
    }
});