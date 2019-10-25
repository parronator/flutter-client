import { mainOptions } from '../options';
import { GluegunToolboxCustom } from '../types';

module.exports = {
    name: 'flutter-client',
    run: async (toolbox: GluegunToolboxCustom) => {
        const {print, options, executor} = toolbox;
        print.warning('Welcome to flutter-cli');
        executor.main((await options(mainOptions)));
    },
};
