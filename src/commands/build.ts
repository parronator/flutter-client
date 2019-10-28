import { BuildApp } from '../tasks/build-app';
import { GluegunToolboxCustom } from '../types';


module.exports = {
    name: 'build',
    alias: ['b'],
    run: async (toolbox: GluegunToolboxCustom) => {
        await BuildApp(toolbox);
    },
}
