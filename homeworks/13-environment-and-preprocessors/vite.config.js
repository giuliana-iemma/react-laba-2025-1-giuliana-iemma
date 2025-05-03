// vite.config.js
export default {
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
  build: {
    sourcemap: true,
  },
};
