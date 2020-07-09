$(function(){
  $('#btn').on('click',()=>{
    $.ajax({
      type:'POST',
      dataType:'JSON',
      url:'http://localhost:3000/ajax',
      data: {
        'message': $('#message').val()
      },
      success:function(message){
        $('#send').text(message.msg);
      },
      error:function(e){
        $('#send').text(e);
      }

    });

  });
});
