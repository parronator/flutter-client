import { GluegunToolboxCustom } from '../types';
import { TestApp } from '../tasks/test-app';


module.exports = {
    name: 'test',
    alias: ['t'],
    run: async (toolbox: GluegunToolboxCustom) => {
        TestApp(toolbox);
    },
}
