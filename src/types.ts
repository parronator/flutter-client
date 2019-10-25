// export types
import { GluegunToolbox } from 'gluegun';

export interface GluegunToolboxCustom extends GluegunToolbox {
    executor: IExecutor,
    builder: IBuilder,
    error: IError
}

export interface IExecutor {
    main: Function
}

export interface IConfiguration {
    mainFilePath: String,
    bundlePath: String,
    apkPath: String,
}

export interface IBuilder {
    flutterClean: Function,
    createBundle: Function,
    createApk: Function,
    renameBundle: Function,
    renameApk: Function,
    buildIOS: Function,
    openPath: Function,
}

export interface IError {
    notImplemented: Function
}

