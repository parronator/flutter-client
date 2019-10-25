import { Init } from '../tasks/init';
import { GluegunToolboxCustom } from '../types';


module.exports = {
    name: 'init',
    alias: ['i'],
    run: async (toolbox: GluegunToolboxCustom) => {
        Init(toolbox);
    },
}
