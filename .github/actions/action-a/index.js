const message = `Hello, ${process.env.INPUT_NAME}!`;
console.log(message);
console.log(`::set-output name=message::${message}`);
