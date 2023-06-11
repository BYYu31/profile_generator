const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing ', (activity) => {
    rl.question('What do you listen to whie doing that ', (song) => {
      rl.question('Which meal is  your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {
              console.log(`My name is ${name} and I enjoy ${activity}. I like to listen to ${song} while ${activity}. My favourite meal is ${meal} and my favourite food is ${food}. My favourite sport is ${sport}. My superpowers are ${superPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});