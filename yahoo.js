var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true})

  nightmare
    .goto('http://google.com/')
    .insert('input[title="Search"]', 'google jobs')
    .insert('document', '\u000d') // new line in unicode
    .wait('#main')
    .wait(1500)
    .insert('document', '\t')
    .insert('document', '\u000d')
    // .type('input[title="q"]', 'Software Engineering')
    // .wait(5000)
    .then(function (result) {
      console.log(result)
    })