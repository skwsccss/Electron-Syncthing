const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const APP_DIR = path.resolve(__dirname, './builds/IA-Connect-win32-ia32');
const OUT_DIR = path.resolve(__dirname, './windows-MSI');

const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    description: 'This is a IA Connection application',
    exe: 'IA-Connect',
    name: 'IA-Connect',
    manufacturer: 'Vlad',
    version: '1.0.0',
    shortcutName: 'IA-Connect',
    shortcutFolderName: 'Electron',
    shortName: 'IAC',
    ui: {
        chooseDirectory: true,
    }
});

msiCreator.create().then(function() {
    msiCreator.compile();
});