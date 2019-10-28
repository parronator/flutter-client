import { GluegunToolbox } from 'gluegun'
import { PromptOptions } from 'gluegun/build/types/toolbox/prompt-enquirer-types';

module.exports = async (toolbox: GluegunToolbox) => {
    toolbox.options = async (questions: PromptOptions) => {
        let {prompt} = toolbox;
        let answers = await prompt.ask(questions);
        return answers;
    }
}
