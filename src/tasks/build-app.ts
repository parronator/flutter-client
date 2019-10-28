import { GluegunToolboxCustom } from '../types';
import {
    platformOptions,
    EPlatformOptions,
    environmentOptions,
    buildAndroidOptions, EBuildAndroidOptions, modeOptions
} from '../options';


export const BuildApp = async (toolbox: GluegunToolboxCustom) => {
    const {print, options, builder} = toolbox;

    const platform = await options(platformOptions);
    const buildType = await options(buildAndroidOptions);
    const environment = await options(environmentOptions);

    if (platform.platformSelect === EPlatformOptions.Android) {
        if (buildType.buildAndroidSelect === EBuildAndroidOptions.Bundle) {

            await builder.flutterClean();
            await builder.createBundle(environment.environmentSelect);
            await builder.renameBundle(environment.environmentSelect);
            await builder.openPath(EBuildAndroidOptions.Bundle);
        }
        if (buildType.buildAndroidSelect === EBuildAndroidOptions.Apk) {
            const modeType = await options(modeOptions);
            await builder.flutterClean();
            await builder.createApk(environment.environmentSelect, modeType.modeSelect);
            await builder.renameApk(environment.environmentSelect, modeType.modeSelect);
            await builder.openPath(EBuildAndroidOptions.Apk, modeType.modeSelect);
        }
    }

    if (platform.platformSelect === EPlatformOptions.IOS) {
        await builder.flutterClean();
        await builder.buildIOS(environment.environmentSelect)
    }
    print.success('DONE');
    process.exit(1);
}
