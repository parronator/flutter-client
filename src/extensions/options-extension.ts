import { GluegunToolbox } from 'gluegun'
import { PromptOptions } from 'gluegun/build/types/toolbox/prompt-enquirer-types';

module.exports = async (toolbox: GluegunToolbox) => {
    toolbox.options = async (questions: PromptOptions) => {
        const {prompt} = toolbox;
        const answers = await prompt.ask(questions);
        return answers;
    }
}
