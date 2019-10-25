import { GluegunToolboxCustom } from '../types';
import { EBuildAndroidOptions, EEnvironmentOptions } from '../options';

module.exports = async (toolbox: GluegunToolboxCustom) => {
    const {print, system, config: {loadConfig}} = toolbox;

    const newConfig = loadConfig('flutter-cli', process.cwd());
    const getGlobal = (field) => newConfig.defaults && newConfig.defaults[field] ? newConfig.defaults[field] : toolbox.config.fluttercli[field];

    const mainFileStagingPath = getGlobal('mainFileStagingPath');
    const mainFileQAPath = getGlobal('mainFileQAPath');
    const mainFileProductionPath = getGlobal('mainFileProductionPath');
    const bundlePath = getGlobal('bundlePath');
    const apkPath = getGlobal('apkPath');

    const flutterClean = async () => {
        const spinnerClean = print.spin('Cleaning Flutter');
        await system.run('flutter clean');
        spinnerClean.succeed();
    };

    const createBundle = async (environment: EEnvironmentOptions) => {
        const spinnerBuild = print.spin('Creating bundle');
        await system.run('flutter build appbundle -t ' + mainFile(environment));
        spinnerBuild.succeed();
    };

    const renameBundle = async (environment: EEnvironmentOptions) => {
        const spinnerRename = print.spin('Renaming bundle');
        await system.run(`mv ${bundlePath}app.aab ${bundlePath}` + buildName(environment) + '.aab');
        spinnerRename.succeed();
    };

    const openPath = async (type: EBuildAndroidOptions) => {
        if(type === EBuildAndroidOptions.Apk) await system.run(`open ${apkPath}`);
        if(type === EBuildAndroidOptions.Bundle) await system.run(`open ${bundlePath}`);
    };

    const createApk = async (environment: EEnvironmentOptions) => {
        const spinnerBuild = print.spin('Creating apk');
        await system.run('flutter build apk --release -t ' + mainFile(environment));
        spinnerBuild.succeed();
    };

    const renameApk = async (environment: EEnvironmentOptions) => {
        const spinnerRename = print.spin('Renaming apk');
        await system.run(`mv ${apkPath}app-release.apk ${apkPath}` + buildName(environment) + '.apk');
        spinnerRename.succeed();
    };

    const buildIOS = async (environment: EEnvironmentOptions) => {
        const spinnerBuild = print.spin('Building app');
        await system.run('flutter build ios -t ' + mainFile(environment));
        spinnerBuild.succeed();
    };

    const buildName = (environment: EEnvironmentOptions) => {
        switch (environment) {
            case EEnvironmentOptions.Staging:
                return 'app-release-staging';
            case EEnvironmentOptions.QA:
                return 'app-release-qa';
            case EEnvironmentOptions.Production:
                return 'app-release-production';
        }
    };

    const mainFile = (environment: EEnvironmentOptions) => {
        switch (environment) {
            case EEnvironmentOptions.Staging:
                return mainFileStagingPath;
            case EEnvironmentOptions.QA:
                return mainFileQAPath;
            case EEnvironmentOptions.Production:
                return mainFileProductionPath;
        }
    };

    toolbox.builder = {
        flutterClean: flutterClean,
        createBundle: createBundle,
        createApk: createApk,
        renameBundle: renameBundle,
        renameApk: renameApk,
        buildIOS: buildIOS,
        openPath: openPath,
    };
};
