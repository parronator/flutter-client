import { GluegunToolboxCustom } from '../types';


export const Init = async (toolbox: GluegunToolboxCustom) => {
    const {
        template: { generate },
        print,
    } = toolbox;

    const spinner = print.spin('Initialising');

    await generate({
        template: 'init.ts.ejs',
        target: `flutter-client.config.js`,
    });
    spinner.succeed();

    print.success('DONE');
    process.exit(1);
}
