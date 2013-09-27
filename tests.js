var test = require('tape')
var Observable = require('./index')
var E = require('emmitt')
var spy = require('ispy')

test('get value', function(t){
  var obj = { name: 'bob' }
  var val = Observable(obj, 'name')
  t.equal(val(), 'bob')
  t.end()
})

test('set value', function(t){
  var obj = { name: 'bob' }
  var val = Observable(obj, 'name')
  val('dan')
  t.equal(obj.name, 'dan')
  t.end()
})

test('register for changes via emmitt', function(t){
  var obj = { name: 'bob' }
  var onChange = spy()
  var val = Observable(obj, 'name')
  E.on(obj, 'change', onChange)
  val('james')
  t.assert(onChange.called, 'should have called')
  t.end()
})

test('register for changes via observable', function(t){
  var obj = { name: 'bob' }
  var onChange = spy()
  var val = Observable(obj, 'name')
  var remove = val(onChange)
  val('jane')
  t.assert(onChange.called, 'should have called')
  t.deepEqual(onChange.lastCall.args, ['jane'])
  onChange.reset()
  remove()
  val('jerry')
  t.assert(!onChange.called, 'shouldnt have called')
  t.end()
})
