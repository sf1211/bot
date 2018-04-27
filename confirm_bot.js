const Botkit = require('botkit');
const cron = require('cron');

const controller = Botkit.slackbot();

controller.spawn({
    token : process.env.token
}).startRTM((err, bot, payload) => {
    new cron.CronJob({
        cronTime: '00 40 10 * * 1-5',
        onTick: () => {
            bot.say({
                channel: 's-bot-test',
                text: ':smiley: おはようございます！'
            });
        },
        start: true,
        timeZone: 'Asia/Tokyo'
    });
});