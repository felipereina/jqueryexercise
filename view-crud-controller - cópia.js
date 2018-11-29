//mock JSON 
{
    name: 'joao',
    password: '12345',
    addiction: 'smoking'
}

$(function ()
//caching the properties
var name = $('name');
var password = $('password');
var addiction = $('addiction'); 

// GET Operation
$.ajax({
    type: GET,
    url: '',
    success: function(){

    },
    error: function(){
        alert('');
    }
});
// POST Operation

var element = {
    name: $name.val(),
    password: $password.val(),
    addiction: $addiction.val()
  };

$.ajax({
    type: POST,
    url: '',
    data: element,
    success: function(){

    },
    error: function(){
        alert('');
    }
});
// PUT Operation
$.ajax({
    type: PUT,
    url: '',
    data: element,
    success: function(){
        
    },
    error: function(){
        alert('');
    }
});
// DELETE Operation
$.ajax({
    type: DELETE,
    url: '',
    success: function(){

    },
    error: function(){
        alert('');
    }
});




});

