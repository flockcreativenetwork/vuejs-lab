var data = [];

$(function(){
    $.get('https://ghibliapi.herokuapp.com/films',function(resp){
        data = resp;
        $('#loading').hide();
        $('button').show();
        renderList();
    },'json');

    $('button').on('click',function(){
        data = data.reverse();
        renderList();
    });
});

function renderList(){
    $('#film-list').html('');
    $.each(data,function(index,item){
        $('#film-list').append('<li>'+item.title+'</li>');
    });
}