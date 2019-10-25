import { GluegunToolboxCustom } from '../types';


export const TestApp = async (toolbox: GluegunToolboxCustom) => {
    const {print, system} = toolbox;
    await system.run('flutter test');
    print.success('DONE');
    // process.exit(1);
}
