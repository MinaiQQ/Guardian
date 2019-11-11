# PhantomGuard
Discord Moderation bot built in `Discord.JS`.

## Information
PhantomGuard was built in `Discord.JS` and utilises the `FS` module for both it's Command Handler and Events Handler.
The Commands and Events are stored in their own separate folders for ease of management.

PhantomGuard was originally intended to be a Private Discord Moderation bot for PhantomDEV however do to server costs the project was abandoned and now serves as a base for anyone who wants it to clone and build their own Discord bot out of.

## Dependencies
`Discord.js`: `11.5.1`

## devDependencies
`nodemon`: `1.19.2`

## Installation
These instructions are for use with the `AWS Webservers` via `WinSCP` and `PuTTy`.  If you wish to use them without these, you will need to manually install `screens` onto your `Ubuntu 18.04` server along with the rest of the dependencies.

- Install `Node.JS` and `NPM` on a server running `Ubuntu 18.04`

```js
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install nodejs
sudo apt-get install npm
```

- Clone the bot onto your server via the following command

```js
git clone "https://github.com/phantomdev-github/PhantomGuard.git"
```

- CD to the bot directory

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

- to run the bot in dev mode use

```js
npm run dev
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

If you ever need to get back int the screen window, you can do so with

```js
screen -R PhantomGuard
```

If you have issues with screens you can use the following command to kill the PhantomGuard screen process

```js
screen -S -X PhantomGuard quit
```

## Support

- **PhantomDEV**: https://PhantomDEV.Enjin.com
- **Discord**: https://discord.gg/9R5GBe2
