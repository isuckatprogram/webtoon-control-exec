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
    // var fork = require('child_process').fork
    // var child = fork('./control')
    require('./control')
    window = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true
        },
        icon:'images/favicon.ico'
    })
    window.loadURL('https://webtoons.com')
    window.webContents.on('did-finish-load', function() {
        window.show();
    })
    window.setMenuBarVisibility(false)
}

app.on('ready',()=>{
    createWindow()
})
app.on('before-quit',(e)=>{

})