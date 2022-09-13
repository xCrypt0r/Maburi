import { app, ipcMain, BrowserWindow } from 'electron';
import type { IpcMainEvent } from 'electron';
import path from 'path';
import getName from '../src/utils/getName';

let mainWindow: BrowserWindow | null;

app.on('ready', createWindow)
    .whenReady()
    .then(registerListeners);

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 250,
        icon: path.join(__dirname, '../../assets/icons/icon-64x64.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            devTools: false
        },
        show: false,
        autoHideMenuBar: true
    });

    if (app.isPackaged) {
        mainWindow.loadURL(`file://${path.join(__dirname, '../index.html')}`);
    } else {
        mainWindow.loadURL('http://localhost:3000');
    }

    mainWindow.on('ready-to-show', (): void => mainWindow.show());
    mainWindow.on('closed', (): void => {
        mainWindow = null;
    });
}

function registerListeners(): void {
    ipcMain.on('send-id', async (
        e: IpcMainEvent,
        payload: any
    ): Promise<void> => {
        let name = await getName(payload);

        e.reply('get-name', `${payload}: ${name}`);
    });
}