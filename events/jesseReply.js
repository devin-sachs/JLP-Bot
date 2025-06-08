const { Events } = require('discord.js');

const targetUserId = '444643657119956992';

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // console.log('executing message');
        // Ignore bot messages

        const responses = [
            'WAT DUH... WHAT A MESS',
            'LESBIAAANS!',
            'Have you noticed that?',
            'Big Momma Michelle!',
            'Amazin!',
            'Im black and slow, I dont know what that meaans',
            'Just because I fight with you doesnt mean i dont love you',
            'Are you a Christian?',
            'You would become ALPHA.',
            'How did you become a liberal / progressive?',
            'Do you feel like a man as a liberal? Most men, *real men*, are conservative.',
            'Are you a beta male... BEETTTA!',
        ];
        if (message.author.bot) return;

            // Repsond only to a specific user
        if (message.author.id === targetUserId) {
            await message.reply(responses[Math.floor(Math.random() * responses.length)]);
        }
    },

};