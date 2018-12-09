// let async = require('async')
let shell = require('shelljs')
let db = require('../config/db')

module.exports = () => {
  var arr = []
  for (var i=0; i<10; i++) {
    let google_ping = shell.exec('curl -L google.com', {silent: true}).stdout
    var leng = google_ping.length
    var resp_time = google_ping.slice(leng-10, leng-4)
    console.log(leng)
    console.log(resp_time)
    // console.log(resp_time)
    let leg
    for (var j=0; j<resp_time.length; j++)
      if (resp_time[j] === '=')
        leg = j
    var a = resp_time.slice(leg+1)
    console.log(a)
    // console.log(Number(a))
    console.log(i)
    arr.push(Number(a))
  }
  console.log(arr)
}