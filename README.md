

dbt-linter is a Visual Studio Code extension for linting and intellisense for DBT files

## Installation
- Open Visual Studio Code
- Select Extensions (Ctrl + Shift + X)
- Open “More Action” menu(ellipsis on the top) and click “Install from VSIX…”
- Locate VSIX file and select
- Reload Visual Studio Code

## Build the Extension
Before we build our extension, We need a node package "VSCE". To install run the below command in the command line. Make sure you have "npm" installed.

```bash
npm install -g vsce
```
To build the extension. Go to the repository folder in command line and type the below command
```bash
vsce package
# myExtension.vsix generated
```
## Contributing
Please refer to [Contributing Guidelines](https://github.com/visualbis/dbt-linter/blob/master/Contributing.MD)

## License
[MIT](https://choosealicense.com/licenses/mit/)
