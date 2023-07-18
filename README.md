

<h1 align="center">Sketchy Bot By GInger<br></h1>
<p align="center">
<img src="https://telegra.ph/file/97ad903ba5a233f75a751.jpg" width="540" height="280" />
</p>

<p align="center">
Sketchy Bot Multi Device is a automated whatsapp bot created by <a href="https://github.com/GingerBreadSketchy" target="_blank">GingerSketchy</a> using <a href="https://github.com/adiwajshing/Baileys" target="_blank">Baileys</a> and <a href="https://github.com/nodejs" target="_blank">Nodejs</a>. Dont forget to give a star bro.
</p>

------

# Setup For Deployment 👇

- FORK THE REPOSITORY [Here](https://github.com/GingerBreadSketchy/sketchy/fork)

## `Scan QR Code For Session`
[![Cheems Bot](https://repl.it/badge/github/quiec/whatsasena)](https://replit.com/@DGXeon/Cheems-Bot-Multi-Auth-Session-Generator?v=1)

## ` BUILDPACKS`

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/GingerBreadSketchy/sketchy/)

# Install Manually 👇
## `Requirements`
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
* [Libwebp](https://developers.google.com/speed/webp/download)
* Any text editor
## `Clone Repo & Installation dependencies`
```bash
git clone https://github.com/GingerBreadSketchy/sketchy.git
cd CheemsBot-MD8

npm start
```
## `For Termux/Ssh/Ubuntu`
```bash
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/GingerBreadSketchy/sketchy
cd CheemsBot-MD8
yarn install
npm start
```
## `For VPS`
```bash
apt install nodejs 
apt install git 
apt apt install ffmpeg 
apt apt install libwebp 
apt apt install imagrmagick
apt install bash
git clone https://github.com/GingerBreadSketchy/sketchy
cd CheemsBot-MD8
npm start
```
## `For 24/7 Activation (Termux)`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
