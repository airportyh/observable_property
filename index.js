var set = require('setter')
var E = require('emmitt')
module.exports = function(obj, attr){
  return function(val){
    if (val === undefined){
      return obj[attr]
    }if (typeof val === 'function'){
      var evt = 'change:' + attr
      E.on(obj, evt, val)
      return function(){
        E.off(obj, evt, val)
      }
    }else{
      set(obj, attr, val)
    }
  }
}