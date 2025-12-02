import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cast process to any to resolve TS error "Property 'cwd' does not exist on type 'Process'"
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // This is necessary to make process.env.API_KEY work in the client-side browser code
      // created by the specific prompt requirements.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});