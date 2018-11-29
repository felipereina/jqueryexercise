
$(function (){
//caching the properties
var name = $('#name');
var password = $('#password');

function newPage(){
    //renderizar uma nova página
}
// POST Operation

var element = {
    name: $name.val(),
    password: $password.val(),
  };

$.ajax({
    type: POST,
    url: '',
    data: element,
    success: function(user){
        newPage(user);
    },
    error: function(){
        alert('');
    }
});

});

