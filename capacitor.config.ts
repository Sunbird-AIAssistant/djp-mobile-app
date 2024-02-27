import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.gov.myjp.app',
  appName: 'e-Jaadui Pitara',
  loggingBehavior: "none",
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    CapacitorSQLite: {
      androidIsEncryption: false
    },
    SplashScreen: {
      "launchShowDuration": 10
    },
    LocalNotifications: {
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  }
};

export default config;
