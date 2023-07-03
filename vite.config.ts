import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default ({ mode }) => {
  console.log(loadEnv(mode, process.cwd()).VITE_BASE_API_URL)
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly', // 我们使用驼峰形式
      },
    },
    server: {
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd()).VITE_BASE_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/service': {
          target: loadEnv(mode, process.cwd()).VITE_BASE_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/service/, ''),
        },
        '/video': {
          target: loadEnv(mode, process.cwd()).VITE_SELENOID_HTTP_URL,
          changeOrigin: true,
          secure: false,
        },
        '/ws': {
          target: loadEnv(mode, process.cwd()).VITE_BASE_WS_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
        '/selenoid/websocket': {
          target: loadEnv(mode, process.cwd()).VITE_SELENOID_WS_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/selenoid\/websocket/, ''),
        },
      },
    },
  });
}
