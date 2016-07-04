$(document).ready(function() {

  // Place JavaScript code here...
  $.ajax({
      url: '/',
      method: 'POST',
      data: {'_csrf': $( "meta[name='csrf-token']").attr('content')},
      success: function(response){
        window.location.href='/';
      }
  })
});

