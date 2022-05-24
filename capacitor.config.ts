import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'project-cni',
  webDir: 'www',
  bundledWebRuntime: false,
  "plugins": {
    "SplashScreen": {
         "launchShowDuration": 1000,
         "launchAutoHide": false,
         "backgroundColor": "#ffffffff",
         "androidSplashResourceName": "splash",
         "androidScaleType": "CENTER_CROP",
         "showSpinner": true,
         "androidSpinnerStyle": "large",
         "iosSpinnerStyle": "small",
         "spinnerColor": "#999999",
         "splashFullScreen": false,
         "splashImmersive": false,
         "layoutName": "launch_screen",
         "useDialog": true
    }
  }
};

export default config;
