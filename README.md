Observable Property
===================

A small utility to convert an object property into an [observable](https://npmjs.org/package/observable).

## Install

Install on NPM or Bower: `observable_property`.

## Usage

Create an observable

    > var Observable = require('observable_property')
      var person = { name : 'bob' }
      var val = Observable(person, 'name')

Getting the value

    > val() 
    'bob'

Setting the value

    > val('dan')
    > val()
    'dan'
    > person.name
    'dan'

Getting notified

    > var stopNotifying = val(function(newVal){
        console.log('Was changed to', newVal)
      })
    > val('james')
    Was changed to james

Stop getting notified

    > stopNotifying()

Getting notified via [Emmitt](https://github.com/airportyh/emmitt)

    > var E = require('emmitt')

    > E.on(person, 'change:name', function(value){
        console.log('Name was changed to', value)
      })

    > val('jamison')
    Name was changed to jamison




