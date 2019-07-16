
var vscode = require('vscode');
var vkbeautify = require('vkbeautify');
function activate(context) {
    var disposable = vscode.commands.registerCommand('formatsql', function () {
        var selections = [];
        for (var i = 0; i < vscode.window.activeTextEditor.selections.length; i++) {
            var s = vscode.window.activeTextEditor.selections[i];
            if (!s.start.isEqual(s.end))
                selections.push(new vscode.Range(s.start, s.end));
        }

        if (selections.length === 0) {
            selections.push(new vscode.Range(vscode.window.activeTextEditor.document.positionAt(0), vscode.window.activeTextEditor.document.positionAt(vscode.window.activeTextEditor.document.getText().length)));
        }

        vscode.window.activeTextEditor.edit(function(builder) {
            for (var i = 0; i < selections.length; i++) {
                var range = selections[i];
                var text = vscode.window.activeTextEditor.document.getText(range).toString();
                var bt = vkbeautify.sql(text);
                builder.replace(range, bt);
            }
        });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;