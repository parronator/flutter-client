module.exports = {
  name: 'flutterclient',
  defaults: {
    mainFileStagingPath: 'lib/main_staging.dart',
    mainFileQAPath: 'lib/main_qa.dart',
    mainFileProductionPath: 'lib/main.dart',
    bundlePath: 'build/app/outputs/bundle/release/',
    apkReleasePath: 'build/app/outputs/apk/release/',
    apkDebugPath: 'build/app/outputs/apk/debug/'
  }
}
