import { PluginOption, defineConfig } from 'vite';
import * as path from 'path';

function print() {
  let init = false;
  const plugin: PluginOption = {
    name: 'print',

    async transform(src, id) {
      if (this.resolve && !init) {
        console.log('debug', await this.resolve('package-a'));
        init = true;
      }
    },
  };

  return plugin;
}

export default defineConfig({
  resolve: {
    alias: {
      'package-a': path.resolve(__dirname, './packages/package-a/src'),
    },
  },
  plugins: [print()],
});
