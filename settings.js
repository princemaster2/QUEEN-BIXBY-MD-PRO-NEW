//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['254768371432']
global.premium = ['𝗣𝗥𝗜𝗡𝗖𝗘 𝗧𝗛𝗘 𝗚𝗥𝗘𝗔𝗧']
global.ownernomer = '𝗽𝗥𝗶𝗡𝗰𝗘'
global.ownername = 'prince'
global.botname = 'PRINCE USER BOT'
global.footer = ' Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ.'
global.ig = 'wa.me/254768371432'
global.region = 'KENYA'
global.sc = 'https://github.com/princemaster2/QUEEN-BIXBY-MD-PRO-NEW'
global.myweb = 'github.com/princemaster1'
global.packname = 'Prince Bixby MD'
global.author = 'prince'
global.sessionName = 'session'
global.prefa = ['','']
global.sp = '🚢'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin 𝗕𝗔𝗞𝗔 𝗠𝗕𝗪𝗔 𝗪𝗘𝗪𝗘!',
    botAdmin: 'Bot Must Be Admin First 𝗕𝗔𝗞𝗔 𝗠𝗔𝗟𝗔𝗬𝗔 𝗦𝗔𝗡𝗔!',
    owner: 'This Feature Is Only For Owner 𝗦𝗧𝗨𝗣𝗜𝗗!',
    group: 'Feature Used Only For Groups 𝗦𝗧𝗨𝗣𝗜𝗗!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Please Wait...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./BixbyMedia/djt.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
