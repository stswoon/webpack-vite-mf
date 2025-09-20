import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3201
    },
    plugins: [
        react(),
        federation({
            name: "remoteViteMf",
            filename: "remoteEntry_viteMf.js",
            exposes: {
                "./vite-mf": "./src/ViteMf.jsx",
            },
            // shared: ["vue"],
        }),
    ],
})
