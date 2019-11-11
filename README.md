# PhantomGuard
Discord Moderation Bot

## Information
A Discord Moderation bot built in `Discord.JS` and utilising the `FS` module for both it's Command Handler and Events Handler.

Commands and Events are stored in their own separate folders.

**Dependencies**
- Discord.js: `11.5.1`
- eslint: 6.3.0`

## devDependencies
- nodemon: `1.19.2`

## Installation
These instructions are for use with the AWS Webservers via WinSCP and PuTTy.

- Install Node.JS and NPM on ubuntu 18.04

```js
sudo apte-get update
sudo apt-get upgrade -y
sudo apt-get install nodejs
sudo apt-get install npm
```

- Download the bot

```js
git clone "https://github.com/phantomdev-github/PhantomGuard.git"
```

- Next CD to the bot directory

```js
cd ~/PhantomGuard
```

- Install the base dependencies

```js
npm -i
```

- Install the devDeependencies

```js
npm -i nodemon --run-dev
```

[If you are not still in the bot directory, CD into it before progressing any further]

- Launch a screens window

```js
screen -S PhantomGuard
```

- now run the bot

```js
npm run start
```

If all went well the bot should but up and running.

You can now close the screens window with

```js
ctrl+a+d
```

 and finally exit the terminal with
 
```js
exit
```

The bot will continue to run in screens without needing the user to keep it active.

## Support

>- <a href=https://PhantomDEV.Enjin.com>PhantomDEV/a>
>- <a href=https://discord.gg/9R5GBe2>Discord</a>
