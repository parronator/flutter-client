import { GluegunToolbox } from 'gluegun'

module.exports = async (toolbox: GluegunToolbox) => {
    const notImplemented = () => {
        const {print} = toolbox;
        print.error('Not implemented');
    };

    toolbox.error = {
        notImplemented: notImplemented
    };
}
