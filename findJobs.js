var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true})

  nightmare
    .goto('http://google.com/')
    .type('input[title="Search"]', 'google jobs')
    .type('document', '\u000d') // new line in unicode
    .wait('#main')
    .wait(1500)
    .type('document', '\t')
    .type('document', '\u000d')
    .wait(1500)
    // .type('input[title="q"]', 'Software Engineering')
    // .wait(5000)
    .findJobs()
    .click()
    .then(function (result) {
      console.log(result)
    })
    .catch(function(result){
        console.log(result)
    })
  // 