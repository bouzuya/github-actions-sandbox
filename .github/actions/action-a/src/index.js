const core = require('@actions/core');
const message = `Hello, ${process.env.INPUT_NAME}!`;
console.log(message);
core.setOutput('message', message);
