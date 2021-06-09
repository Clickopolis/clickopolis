const { app, BrowserWindow } = require('electron');
const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');


function createWindow() {
    const win = new BrowserWindow({
        width: 1440,
        height: 900
    })

    win.loadFile('dist/index.html')
}

app.whenReady().then(() => {
    createWindow();
    
    installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

