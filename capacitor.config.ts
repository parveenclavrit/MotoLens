import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.video.rspotbot',
  appName: 'rspotbot',
  webDir: 'www',
  server: {
    androidScheme: 'http',
    // url: "http://3.110.14.254:8000"
  },

  bundledWebRuntime: false,
  plugins: {
    Camera: {
      allowUseOfCamera: true,
    },
    MediaCapture: {},
  },
};

export default config;
