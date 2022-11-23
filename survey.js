// import * as readline from 'node:readline';

// //const readline = require('node:readline');

// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

//Once this code is invoked, the Node.js application will not
//terminate until the readline.Interface is closed because
//the interface waits for data to be received on the input
//stream.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              let result = `${answer1} likes to ${answer2} while listening to ${answer3}. Their favourite daytime meal is a hearty ${answer4}, for which they always eat ${answer5}. Their bestest sport is ${answer6} because they can summon their superpower -- ${answer7} -- to win every time.`
              console.log(result)
              rl.close();
            })
          })
        })
      })
    })
  })
});

// console.log(`That's a beautiful name, ${answer}.`); 