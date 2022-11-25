import { defineConfig } from 'vite';
import Unplugin from 'unplugin-fontawesome-autoimport/vite';

export default defineConfig({
  plugins: [
    Unplugin(),
  ],
});
