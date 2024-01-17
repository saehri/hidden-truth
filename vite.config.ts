import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import {VitePWA} from 'vite-plugin-pwa';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

export default defineConfig({
  plugins: [
    react({babel: {plugins: [jotaiDebugLabel, jotaiReactRefresh]}}),
    viteTsconfigPaths(),
    VitePWA({registerType: 'autoUpdate'}),
  ],
  server: {
    port: 3000,
    host: true,
  },
});
