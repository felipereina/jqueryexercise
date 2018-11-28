$(function (){
  var $elements = $('#orders');
  var $name = $('#name');
  var $drink = $('#drink');

  function newOrder(){
    $elements.append('<li>name: '+ element.name+', drink: '+ element.drink+ <button data-id = 'element.id' class='remove'>Delete</button>'</li>');

  }

  //using Mustache
  var orderTemplate = "" +
  "<li>" +
  "<p>Name: {{name}}</p>" +
  "<p>Drink: {{drink}}</p>" +
  "<button data-id = '{{id}}' class = 'remove'>X</button>" +
  "</li>";



  //getting a array of JSON objects from the server and putting it into a list
  $.ajax({
    type: 'GET',
    url: '/api/orders'
    success: function(elements){
      $.each(elements, function(index, element){
        newOrder();
      });
    },
    error: function(){
      alert('error loading orders');
    }
  });

//building the JSON response to POST
  $('#add-order').on('click', function(){
      var order = {
        name: $name.val(),
        drink: $drink.val()
      };
      //sending the POST
      $.ajax({
        type: 'POST',
        url: '/api/orders',
        data: order,
        success: function(newOrder){
          newOrder();
        },
        error: function(){
          alert('error saving order');
        }
      });
  });

//deleting order
  $orders.delegate('.remove','click', function(){
    //refresh before delete
    var $li = $(this).closest('li');

    $.ajax({
      type: 'DELETE',
      url: '/api/order/' + $(this).attr('data-id')
      success: function (){
        $li.fadeOut(300, function(){
          $(this).remove();
        });
      }
    })
  });

});
