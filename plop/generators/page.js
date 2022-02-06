/* eslint-disable no-undef */
module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/page/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/styles.module.scss',
        templateFile: 'templates/page/styles.module.scss.hbs',
      },
    ],
  })
}
