import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'configs/index': 'src/configs/index.ts',
  },
  format: 'esm',
  platform: 'node',
  target: 'node24',
  fixedExtension: false,
  dts: true,
  clean: true,
});
