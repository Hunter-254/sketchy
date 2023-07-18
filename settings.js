const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = true //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['254792893310'] //ur owner number
global.ownernomer = "254792893310 " //ur owner number2
global.ownername = "Gingersketchy " //ur owner name
global.ytname = "YT:gingersketchy " //ur yt chanel name
global.socialm = "GitHub:GingerBreadSketchy " //ur github or insta name
global.location = "Africa , Kenya, Nairobi " //ur location

//new
global.botname = "Sketchy"
global.ownernumber = '254792893310'
global.ownername = 'Gingersketchy '
global.ownerNumber = ["254792893310@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@gingersketchy "
global.websitex = "gingersketchy.netlify.app"
global.wagc = "https://chat.whatsapp.com/GQvTj8nPLicGZbCdxnH7pT"
global.themeemoji = '★'
global.wm = "Sketchy Bot Inc."
global.botscript = 'https://github.com/GingerBreadSketchy/sketchy' //script link
global.packname = "Sticker By"
global.author = "Gingersketchy \n\n+254792893310 "
global.creator = "254792893310@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://telegra.ph/file/97ad903ba5a233f75a751.jpg' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Ndo iyo morio 😈 Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
