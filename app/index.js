const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    this.option('default', {
      type: Boolean,
    });
  }

  prompting() {
    if (!this.options.default) {
      const done = this.async();
      this.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'You project name',
          default: this.appname,
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please enter a description for your project',
          default: 'love vue, love typescript!',
        },
        {
          type: 'confirm',
          name: 'install',
          message: 'Would you like to install all dependencies now?',
        },
      ]).then((answers) => {
        this.props = answers;
        done();
      });
    } else {
      this.props = {
        name: 'vue-typescript',
        description: 'love vue, love typescript',
        install: false,
      };
    }
  }

  writing() {
    [
      'config',
      'src',
      '.editorconfig',
      '.gitignore',
      '.tslint.json',
      'tsconfig.json',
      'webpack.config.js',
    ].forEach(name => this.fs.copy(this.templatePath(name), this.destinationPath(name)));
    [
      'index.html',
      'package.json',
    ].forEach(name => this.fs.copyTpl(this.templatePath(name), this.destinationPath(name), {
      name: this.props.name,
      description: this.props.description,
    }));
  }

  install() {
    if (this.props.install) {
      this.npmInstall(null, null, () => {
        this.log('All dependencies are installed!');
      });
    } else {
      this.log(`Skipping the install step. Run \`npm install\` inside the project root when you're ready.`);
    }
  }
};
