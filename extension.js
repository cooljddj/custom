(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "cooljddj";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }
            rcsCommand: {
            command: 'rcs',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me We use the RCS plugin in this room. Get it here: https://rcs.radiant.dj/");
                }
            }
        };
        
            autofapCommand: {
            command: 'autofap',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/YBlC5cW.gif");
                }
            }
        };
        
        bbcCommand: {
            command: 'bbc',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://vrf.wpengine.netdna-cdn.com/wp-content/uploads/2014/07/cemani-chickens-01.jpg");
                }
            }
        };
        
        startupCommand: {
            command: 'startup',
            rank: 'manager',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat(subChat(basicBot.chat.online, {botname: basicBot.settings.botName, version: basicBot.version});
                }
                                 }
                                 };
        
        clearqueueCommand: {
            command: 'clearqueue',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'manager', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var locked = bot.getLocked();
                    if(locked) {
                        $.ajax({
                        type: 'PUT', 
                        url: 'https://plug.dj/_/booth/lock', 
                        contentType: 'application/json',
                        data: JSON.stringify({
                            isLocked: false,
                            removeAllDJs: false })
                        });
                    }   
                    $.ajax({
                    type: 'PUT', 
                    url: 'https://plug.dj/_/booth/lock', 
                    contentType: 'application/json',
                    data: JSON.stringify({
                        isLocked: true,
                        removeAllDJs: true })
                    });
                    if(!locked) {
                        $.ajax({
                        type: 'PUT', 
                        url: 'https://plug.dj/_/booth/lock', 
                        contentType: 'application/json',
                        data: JSON.stringify({
                            isLocked: false,
                            removeAllDJs: false })
                        });
                    }
                }
            }
        };
        
                /*englishCommand: {
                command: 'english',
                rank: 'bouncer',
                type: 'startsWith',
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                        if(chat.message.length === cmd.length) return API.sendChat('/me No user specified.');
                        var name = chat.message.substring(cmd.length + 2);
                        var user = basicBot.userUtilities.lookupUserName(name);
                        if(typeof user === 'boolean') return API.sendChat('/me Invalid user specified.');
                        var lang = basicBot.userUtilities.getUser(user).language;
                        var ch = '/me @' + name + ' ';
                        switch(lang){
                            case 'en': break;
                            case 'da': ch += 'Vær venlig at tale engelsk.'; break;
                            case 'de': ch += 'Bitte sprechen Sie Englisch.'; break;
                            case 'es': ch += 'Por favor, hable Inglés.'; break;
                            case 'fr': ch += 'Parlez anglais, s\'il vous plaît.'; break;
                            case 'nl': ch += 'Spreek Engels, alstublieft.'; break;
                            case 'pl': ch += 'Proszę mówić po angielsku.'; break;
                            case 'pt': ch += 'Por favor, fale Inglês.'; break;
                            case 'sk': ch += 'Hovorte po anglicky, prosím.'; break;
                            case 'cs': ch += 'Mluvte prosím anglicky.'; break;
                            case 'sr': ch += 'Молим Вас, говорите енглески.'; break;
                        }
                        ch += ' English please.';
                        API.sendChat(ch);
                    }
                }
            };*/
        // Example code for a bot command:
        baconCommand: {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "KDG",
      language: "english",
      chatLink: "https://rawgit.com/cooljddj/source/master/lang/en.json",
      scriptLink: "https://rawgit.com/cooljddj/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: true,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 5,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: true,
      commandCooldown: 30,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: true,
      motdInterval: 5,
      motd: "Subscribe to KDG on YT: https://www.youtube.com/KickDownGTA",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: "https://www.youtube.com/KickDownGTA",
      website: "http://KickDownGTA.com/",
      intervalMessages: "Subscribe to KDG on YT: https://www.youtube.com/KickDownGTA",
      messageInterval: 5,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/basicBot/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/cooljddj/source/master/basicBot.js", extend);

}).call(this);
