const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94713317339";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "truee"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94713317339";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_21_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI5LFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5XaTBLUlJkSEU4c01MRnNmeG1yZTFwZmxTV1hST0VobkZFYzB6OGZJSUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTMzMTczMzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIxMThCNTBGRDI3NjQ0QzlGRjE4MzlGN0FGMzY1NjA2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzY4NzI2M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIeE11U09UdFE0LTVpdV9KbmhYNFZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjcyMDg2YmFjLWRjN2EtNGM3YS1hZmZlLTlhOWIyYjJlODUwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAxNzQsXG4gICAgICAxMjMsXG4gICAgICAxLFxuICAgICAgMTQwLFxuICAgICAgMjA3LFxuICAgICAgMTQ5LFxuICAgICAgMzIsXG4gICAgICAyMzgsXG4gICAgICA1OSxcbiAgICAgIDE4MixcbiAgICAgIDE0MSxcbiAgICAgIDEwNyxcbiAgICAgIDExNSxcbiAgICAgIDIwNSxcbiAgICAgIDIzMyxcbiAgICAgIDEwOSxcbiAgICAgIDc0LFxuICAgICAgNDUsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgNDcsXG4gICAgICAyMTQsXG4gICAgICAyNTMsXG4gICAgICAxMDksXG4gICAgICAxNTMsXG4gICAgICAyNDAsXG4gICAgICA4MCxcbiAgICAgIDE5MixcbiAgICAgIDk1LFxuICAgICAgNzMsXG4gICAgICA4NCxcbiAgICAgIDIxMCxcbiAgICAgIDE5NixcbiAgICAgIDc2LFxuICAgICAgNjEsXG4gICAgICAxMjgsXG4gICAgICAyMzUsXG4gICAgICAxMjAsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQWks4NjU0U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTMzMTczMzk6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQ4bWSyrfhtYnKs+G1ieG1iCDQstGDIC0g4bSu8J2Zu/CdmbDwnZmy8J2ZuiB8IOG0hOG0gOG0myA644OkXCIsXG4gICAgXCJsaWRcIjogXCI3OTc3NTE0MjAyNzI2Njo1OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTHI0cjhGRU5Tbmg3TUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlZV21YSjliUEVmRGFvdGpBRmtCSktjYS83YVJ5eC9zV1ZRV0JiSXRCVWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWEgxVXhtWllEVmNoc1VNZjhTbG9BbkllTkdud1V0R1c2QU9BWXZDQVRtaVNRU1owVDlBTzVMZVRkdE0yL0l1R3ZzOE5NR1Q5N0ROam13TkUyVWxrQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN0tiTnBpblo0aHVuTk5ydkN1ZnBQMFZOcjEyMUgrQzdIaFJRRlVPVVB5TUJJWXJaTVNZQzVoSUZ6QzZ0ZnJpeXdWMWFRZjFQR2hvc0FYOS9QNE9lZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTMzMTczMzk6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzY4NzI1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVTK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVMrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRS9lczhkSEtKd3A0YzlpOGx1WmJtajUvY2ZNTG84MXM4UnRRRXZlZWpUUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDc1OTE3Mjk1LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
