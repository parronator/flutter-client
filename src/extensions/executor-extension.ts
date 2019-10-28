import { GluegunAskResponse } from 'gluegun/build/types/toolbox/prompt-types';
import { EMainOptions } from '../options';
import { GluegunToolboxCustom } from '../types';
import { BuildApp } from '../tasks/build-app';
import { TestApp } from '../tasks/test-app';
import { Init } from '../tasks/init';

module.exports = async (toolbox: GluegunToolboxCustom) => {
    const mainActivity = async (response: GluegunAskResponse) => {
        const {error} = toolbox;

        switch (response.optionSelect) {
            case EMainOptions.BuildApp:
                try {
                    await BuildApp(toolbox);
                } catch (e) {
                    console.log('^C')
                }
                break;
            case EMainOptions.Init:
                try {
                    await Init(toolbox);
                } catch (e) {
                    console.log('^C')
                }
                break;
            case EMainOptions.TestApp:
                try {
                    await TestApp(toolbox);
                } catch (e) {
                    console.log('^C')
                }
                break;
            default:
                error.notImplemented();
        }
    };

    toolbox.executor = {
        main: mainActivity,
    };
};
