import { GluegunToolboxCustom } from '../types';
import { EBuildAndroidOptions, EEnvironmentOptions, EModeOptions } from '../options';

module.exports = async (toolbox: GluegunToolboxCustom) => {
    const {print, system, config: {loadConfig}} = toolbox;

    const newConfig = loadConfig('flutter-client', process.cwd());
    const getGlobal = (field) => newConfig.defaults && newConfig.defaults[field] ? newConfig.defaults[field] : toolbox.config.flutterclient[field];

    const mainFileStagingPath = getGlobal('mainFileStagingPath');
    const mainFileQAPath = getGlobal('mainFileQAPath');
    const mainFileProductionPath = getGlobal('mainFileProductionPath');
    const bundlePath = getGlobal('bundlePath');
    const apkReleasePath = getGlobal('apkReleasePath');
    const apkDebugPath = getGlobal('apkDebugPath');

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
        await system.run(`mv ${bundlePath}app.aab ${bundlePath}` + buildName(environment, EModeOptions.Release) + '.aab');
        spinnerRename.succeed();
    };

    const openPath = async (type: EBuildAndroidOptions, mode: EModeOptions) => {
        if(type === EBuildAndroidOptions.Apk) await system.run(`open ${pathMode(mode)}`);
        if(type === EBuildAndroidOptions.Bundle) await system.run(`open ${bundlePath}`);
    };

    const createApk = async (environment: EEnvironmentOptions, mode: EModeOptions) => {
        const spinnerBuild = print.spin('Creating apk');
        await system.run('flutter build apk --'+modeSelector(mode)+' -t ' + mainFile(environment));
        spinnerBuild.succeed();
    };

    const renameApk = async (environment: EEnvironmentOptions, mode: EModeOptions) => {
        const spinnerRename = print.spin('Renaming apk');
        await system.run(`mv ${pathMode(mode)}app-${modeSelector(mode)}.apk ${pathMode(mode)}` + buildName(environment, mode) + '.apk');
        spinnerRename.succeed();
    };

    const buildIOS = async (environment: EEnvironmentOptions) => {
        const spinnerBuild = print.spin('Building app');
        await system.run('flutter build ios -t ' + mainFile(environment));
        spinnerBuild.succeed();
    };

    const buildName = (environment: EEnvironmentOptions, mode: EModeOptions) => {
        switch (environment) {
            case EEnvironmentOptions.Staging:
                return 'app-'+modeSelector(mode)+'-staging';
            case EEnvironmentOptions.QA:
                return 'app-'+modeSelector(mode)+'-qa';
            case EEnvironmentOptions.Production:
                return 'app-'+modeSelector(mode)+'-production';
        }
    };

    const pathMode = (mode: EModeOptions = EModeOptions.Release) => {
        switch (mode) {
            case EModeOptions.Debug:
                return apkDebugPath;
            case EModeOptions.Release:
                return apkReleasePath;
        }
    }

    const modeSelector = (mode: EModeOptions) => {
        switch (mode) {
            case EModeOptions.Debug:
                return 'debug';
            case EModeOptions.Release:
                return 'release';
        }
    }

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
