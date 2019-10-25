import { GluegunToolboxCustom } from '../types';
import {
    platformOptions,
    EPlatformOptions,
    environmentOptions,
    buildAndroidOptions, EBuildAndroidOptions
} from '../options';


export const BuildApp = async (toolbox: GluegunToolboxCustom) => {
    const {print, options, builder} = toolbox;

    const platform = await options(platformOptions);

    if (platform.optionSelect === EPlatformOptions.Android) {
        const buildType = await options(buildAndroidOptions);
        if (buildType.optionSelect === EBuildAndroidOptions.Bundle) {
            const environment = await options(environmentOptions);
            await builder.flutterClean();
            await builder.createBundle(environment.optionSelect);
            await builder.renameBundle(environment.optionSelect);
            await builder.openPath(EBuildAndroidOptions.Bundle);
        }
        if (buildType.optionSelect === EBuildAndroidOptions.Apk) {
            const environment = await options(environmentOptions);
            await builder.flutterClean();
            await builder.createApk(environment.optionSelect);
            await builder.renameApk(environment.optionSelect);
            await builder.openPath(EBuildAndroidOptions.Apk);
        }
    }

    if (platform.optionSelect === EPlatformOptions.IOS) {
        const environment = await options(environmentOptions);
        await builder.flutterClean();
        await builder.buildIOS(environment.optionSelect)
    }
    print.success('DONE');
    process.exit(1);
}
