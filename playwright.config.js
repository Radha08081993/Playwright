// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  timeout: 30 * 1000, // timeout for each test
  expect:{
    timeout: 5000 // timeout for expect assertions
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless:false
    
  },

  
});
module.exports=config;

