import { contextBridge, ipcRenderer } from 'electron';

export const api = {
    send: (
        channel: string,
        payload: any
    ): void => {
        ipcRenderer.send(channel, payload);
    },
    on: (
        channel: string,
        callback: (...args: unknown[]) => unknown
    ): void => {
        ipcRenderer.on(channel, (_, ...args) => callback(args));
    }
};

contextBridge.exposeInMainWorld('api', api);