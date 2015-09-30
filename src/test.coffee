'use strict'

class Test
  constructor: ->
    @fields =
      foo:
        type: 'checkbox'
        name: 'agreeData'

      bar:
        type: 'buttonbar'
        name: 'financingStatus'
        title: 'How was this vehicle purchased?'
        validators:
          'ng-required':
            val: true



if typeof angular != 'undefined'
# need to use this pattern so that we can inject modules for the fields to use
# and so that we can access the fields library in the module export for e2e tests
  angular.module('metromile').service 'Test', Test

# used in protractor tests
if typeof module != 'undefined'
  builder = new Test
  module.exports = builder.fields
