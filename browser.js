const {app, BrowserWindow} = require('electron')

/* TODO: Add Discord Presence
const client = require('discord-rich-presence')('180984871685062656')
*/

require('update-electron-app')({
    repo: 'isuckatprogram/webtoon-control-exec',
    updateInterval: '5 minutes',
    logger: require('electron-log')
})

function createWindow(){
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon:'images/favicon.ico'
    })
    window.webContents.on('did-finish-load', function() {
        window.show();
    })
    window.setMenuBarVisibility(false)
}

app.on('ready',()=>{
    createWindow()
})