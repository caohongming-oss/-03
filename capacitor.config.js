const config = {
  appId: 'com.voicetranslator.app',
  appName: '语音翻译',
  webDir: 'www',
  android: {
    allowMixedContent: true
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: '#0f0f1a',
      showSpinner: false
    }
  }
};

module.exports = config;
