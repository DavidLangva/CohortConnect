$(document).on('turbolinks:load', function(){


$("#join").click(function(evt){
  // evt.preventDefault();
  	$('#emailModal').modal('toggle');
    setTimeout( function(){
      $('#emailModal').modal('toggle');;
        }, 2000 )
    $('#join').hide();
    });
});

