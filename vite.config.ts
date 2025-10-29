import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, '.', '');
    return {
        base: '/imodel/',
        server: {
            port: 5173,
            historyApiFallback: true
        },
        plugins: [react(), tailwindcss()],
        define: {
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            }
        }
    };
});
