/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react-swc';
import million from 'million/compiler';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: false }),
    react(),
    // checker({ typescript: false, eslint: { lintCommand: 'eslint src' } }),
    tsConfigPaths(),
  ],
  server: {
    open: false,
  },
});
