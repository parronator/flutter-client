import { GluegunAskResponse } from 'gluegun/build/types/toolbox/prompt-types';
import { EMainOptions } from '../options';
import { GluegunToolboxCustom } from '../types';
import { BuildApp } from '../tasks/build-app';
import { TestApp } from '../tasks/test-app';

module.exports = async (toolbox: GluegunToolboxCustom) => {
    const mainActivity = async (response: GluegunAskResponse) => {
        const {error} = toolbox;

        switch (response.optionSelect) {
            case EMainOptions.BuildApp:
                await BuildApp(toolbox);
                break;
            case EMainOptions.TestApp:
                await TestApp(toolbox);
                break;
            default:
                error.notImplemented();
        }
    };

    toolbox.executor = {
        main: mainActivity,
    };
};
