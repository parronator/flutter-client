import { PromptOptions } from 'gluegun/build/types/toolbox/prompt-enquirer-types'

export enum EMainOptions {
  BuildApp = 'Build app',
  TestApp = 'Test app',
  NewProject = 'New project',
  NewApp = 'New app',
  NewLib = 'New library',
  Init = 'Initialise flutter-client'
}

export enum EPlatformOptions {
  Android = 'Android',
  IOS = 'iOS'
}

export enum EEnvironmentOptions {
  Staging = 'Staging',
  QA = 'QA',
  Production = 'Production'
}

export enum EModeOptions {
    Debug = 'Debug',
    Release = 'Release'
}

export enum EBuildAndroidOptions {
  Apk = 'Apk',
  Bundle = 'Bundle'
}

export const mainOptions: PromptOptions = {
  type: 'select',
  name: 'optionSelect',
  message: 'Please select option',
  choices: Object.keys(EMainOptions).map(k => EMainOptions[k as any])
}

export const platformOptions: PromptOptions = {
  type: 'select',
  name: 'platformSelect',
  message: 'Please select platform',
  choices: Object.keys(EPlatformOptions).map(k => EPlatformOptions[k as any])
}

export const environmentOptions: PromptOptions = {
  type: 'select',
  name: 'environmentSelect',
  message: 'Please select environment',
  choices: Object.keys(EEnvironmentOptions).map(
    k => EEnvironmentOptions[k as any]
  )
}

export const modeOptions: PromptOptions = {
    type: 'select',
    name: 'modeSelect',
    message: 'Please select mode',
    choices: Object.keys(EModeOptions).map(
        k => EModeOptions[k as any]
    )
}

export const buildAndroidOptions: PromptOptions = {
  type: 'select',
  name: 'buildAndroidSelect',
  message: 'Please select build type',
  choices: Object.keys(EBuildAndroidOptions).map(
    k => EBuildAndroidOptions[k as any]
  )
}
