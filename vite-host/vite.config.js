import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3200
    },
    plugins: [
        react(),
        federation({
            name: "viteHost",
            remotes: {
                remoteViteMf: {
                    type: "module",
                    name: "remoteViteMf",
                    entry: "http://localhost:3201/remoteEntry_viteMf.js",
                    entryGlobalName: "remoteViteMf",
                    shareScope: "default",
                },
            },
            // shared: ["vue"],
        }),
    ],
})
