# Flutter CLI
A CLI for Flutter projects.

## Getting Started
This CLI is made for avoid typing some of the most used commands and configurations for building, generation and creation of flutter apps. 

## Install CLI (WIP)
```shell
$ npm install -g flutter-cli
```

## Current way to use flutter-cli
- Download repository
- Enter repository folder using terminal and run
```shell
$ npm install
$ npm link
```


## Running CLI
```shell
$ flutter-cli
```

## Features
- [x] Build app depending on platform, environment or android build types

## WIP
- [ ] Test app
- [ ] New project
- [ ] New app
- [ ] New library

## Environments
* Production - Used to show the app to the world
* QA - Used to show the app to the client
* Staging - Used for development purposes

## Platforms
* Android
* iOS

## Android generation
* Apk (.apk)
* Bundle (.aab)

## Default configuration for CLI
By default, flutter-cli comes with this configuration
```shell
module.exports = {
    defaults: {
        mainFileStagingPath: 'lib/main_staging.dart',
        mainFileQAPath: 'lib/main_qa.dart',
        mainFileProductionPath: 'lib/main.dart',
        bundlePath: 'build/app/outputs/bundle/release/',
        apkPath: 'build/app/outputs/apk/release/',
    },
}
```

## Custom configuration for CLI
Create a flutter-cli.config.js file on root of your project with the following template in order to overwrite configuration:
```shell
module.exports = {
    defaults: {
        mainFileStagingPath: 'PATH_TO_FILE',
        mainFileQAPath: 'PATH_TO_FILE',
        mainFileProductionPath: 'PATH_TO_FILE',
        bundlePath: 'PATH_TO_GENERATED_BUNDLE',
        apkPath: 'PATH_TO_GENERATED_APK',
    },
}
```

## Authors
* **Albert Parrón**

See also the list of [contributors](https://github.com/parronator/flutter_redux_seed/contributors) who participated in this project.

# License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
