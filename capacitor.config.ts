import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'ng-cap-devops',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
