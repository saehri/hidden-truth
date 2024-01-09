import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    VitePWA({registerType: 'autoUpdate'}),
  ],
  server: {
    port: 3000,
    host: true,
  },
});
