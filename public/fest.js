'use strict';
var Test, builder;

Test = (function() {
  function Test() {
    this.fields = {
      bar: {
        type: 'checkbox',
        name: 'agreeData'
      },
      baz: {
        type: 'buttonbar',
        name: 'financingStatus',
        title: 'How was this vehicle purchased?',
        validators: {
          'ng-required': {
            val: true
          }
        }
      }
    };
  }

  return Test;

})();

if (typeof angular !== 'undefined') {
  angular.module('metromile').service('Test', Test);
}

if (typeof module !== 'undefined') {
  builder = new Test;
  module.exports = builder.fields;
}
