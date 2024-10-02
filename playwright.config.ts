import type { PlaywrightTestConfig } from '@playwright/test';
// import { defineConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
      // Set headless mode to true
      headless: false,
      browserName: 'chromium',       
    },
    timeout: 1 * 60 * 1000,
    retries: 0,
    reporter: [['list']],
};

export default config;