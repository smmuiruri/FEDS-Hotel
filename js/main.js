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
      //        hide_on_select : true,
      format: 'd b-y',
  
    });
    //pickmeup('.range').show();
  
  
  
  });

  i
  on