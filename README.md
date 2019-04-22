[![yuno](https://raw.githubusercontent.com/zfbx/Yuno/master/docs/yunoheader.png)](https://zfbx.github.io/Yuno/)

 * Default Prefix: `.` or `@Yuno#4429`

## Important Links

[Command List](https://zfbx.github.io/Yuno/) | [Discord Server](https://discord.gg/kXbV9Zu)

## About
Meet Yuno, a discord bot built to be modular and easy to expand upon through Javascript using Discord.js. This project is the evolution of a previous project named Kuroyukihime that was my first big jump into node.js. This project is very special to me and used by myself aswell as many of my friends. I try my best to add features that are requested but I'm just one person so it might take me a little while depending on the complexity or I could do it in 5 minutes. If there's anything you would like to see request it [here](https://github.com/zfbx/Yuno/issues/new)

### Features
**Event Logging**
create a private channel and type `.logchannel` for Yuno to use that channel to log all events that happen on the server like new members, deleted message, role changes, etc.

**Auto Role**
Give a specified role to new users automatically when they join using `.autorole RoleName`. very useful for sorting users into categories above the bots for example.

**Twitch Live alerts**
Want a certain twitch stream to alert in a channel when it's live with a preview, title and current game? Just type `.twitch TwitchChannelname` in the channel you want alerts and Yuno will monitor that for you!

**Accept Terms for Role**
If you want to protect your server more from bots or force people to read and accept rules before gaining access to another area you can set up a role with `.termsrole RoleName` and when the user types `.accept` they will be given the role set and their message will be deleted keeping the terms and conditions channel nice and clean for you.

**For the rest of the features check out the [Command List](https://zfbx.github.io/Yuno/)**

## Who Is Yuno?
Yuno (Yuno Gasai) is base off a character from an Anime called Mirai Nikki (Future Diary). Honestly I just really like the character and thought she'd be a great theme for the discord bot :)

## Contribute

Yuno is maintained with ♥️ in my free time. If you'd like to contribute but aren't good with code, you can send a small donation!

[![Tip with PayPal](https://img.shields.io/badge/PayPal-Buy_me...-lightgrey.svg)](https://www.paypal.me/zfbx)
[![Tip with PayPal](https://img.shields.io/badge/soda-%245-green.svg)](https://www.paypal.me/zfbx/5)
[![Tip with PayPal](https://img.shields.io/badge/snacks-%2410-yellow.svg)](https://www.paypal.me/zfbx/10)
[![Tip with PayPal](https://img.shields.io/badge/lunch-%2420-orange.svg)](https://www.paypal.me/zfbx/20)
[![Tip with PayPal](https://img.shields.io/badge/dinner-%2450-red.svg)](https://www.paypal.me/zfbx/50)
[![Tip with PayPal](https://img.shields.io/badge/custom_amount-...-lightgrey.svg)](https://www.paypal.me/zfbx)

Otherwise you can add or fix features. I would greatly appreciate it.
1. Make pull requests to the [**Master Branch**](https://github.com/zfbx/Yuno/tree/master).
2. Keep each pull request to a single feature or fix.
3. Please explain what you did in the PR message.

and Thank You so much for your help ^-^

## Set Up
1. `npm install` (Install required dependencies)
2. Make a copy of config.js.example and rename it to config.js. Change the contents to fit your needs and add your discord token.
3. (Optional) `npm install pm2 -g` (To keep the bot running || I suggest reading into how [pm2](http://pm2.keymetrics.io/) works if you've never seen it before)

### Start
`npm run start`
or if you used step 3 in setup: `npm run startpm2`

### Stop
<kbd>ctrl</kbd> + <kbd>c</kbd> 
or if you used step 3 in setup: `npm run stoppm2`


## License
After much consideration I've decided to go with the GNU GPLv3 License. And to make it simple, here's what that means:

| **Permissions**   | **Conditions**                  | **Limitations** |
|-------------------|---------------------------------|-----------------|
|✔ Commercial use  |👉 Disclose source              |❌Liability       |
|✔ Distribution    |👉 License and copyright notice |❌Warranty        |
|✔ Modification    |👉 Same license                 |                   |
|✔ Patent use      |👉 State changes                |                   |
|✔ Private use     |                                 |                  |


## FAQ
...


