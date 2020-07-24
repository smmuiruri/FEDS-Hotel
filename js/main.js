const pickmeup = require ("./pickmeup");

// booking section - increament & decreament on number of guests and rooms
$(function ($) {
  $('#handleCounter1').handleCounter({
    minimum: 1,
    maximize: 100,

  })

  $('#handleCounter2').handleCounter({
    minimum: 1,
    maximize: 100,

  })

});

// booking section - date

addEventListener('DOMContentLoaded', function () {

  pickmeup('.range', {
    mode: 'range',
    separator: '    to   ',
    position: 'bottom',
  
    format: 'd b-y',

  });
  // datepicker



});
