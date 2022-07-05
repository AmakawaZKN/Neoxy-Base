// CREATED BY NEOXY TEAM !!

const fs = require('fs')
const chalk = require('chalk')

// MY OTHERS
global.owner = ['6283834558105']
global.premium = ['6283834558105']
global.botname = 'AmakawaZKN'
global.packname = 'AmakawaZKN'
global.author = 'ZyKuanMD | wa.me/6282133532380'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.footer = '© Created By Zykuan-kun Official'
global.sp = '⭔'
global.limitawal = {
premium: "Infinity",
free: 25
}

// THUMB
global.image = fs.readFileSync('./connect/image/logo.jpg')
global.thumbnail = fs.readFileSync('./connect/image/thumb.jpg')

// MESSAGE
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner ZyKuan-kun',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading, sabarlah anj...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
