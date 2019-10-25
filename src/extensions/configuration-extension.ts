import { GluegunToolboxCustom } from '../types';


module.exports = async (toolbox: GluegunToolboxCustom) => {
    const {
        config: {loadConfig},
    } = toolbox;

    const currentFolder = process.cwd();

    const newConfig = {
        ...loadConfig('flutter-cli', currentFolder),
    };

    toolbox.configuration = {
        mainFilePath: newConfig.defaults && newConfig.defaults.mainFilePath ? newConfig.defaults.mainFilePath : toolbox.config.fluttercli.mainFilePath,
        bundlePath: newConfig.defaults && newConfig.defaults.bundlePath ? newConfig.defaults.bundlePath : toolbox.config.fluttercli.bundlePath,
        apkPath: newConfig.defaults && newConfig.defaults.apkPath ? newConfig.defaults.apkPath : toolbox.config.fluttercli.apkPath,
    };
};
