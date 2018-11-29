$(function (){
  var $elements = $('#orders');
  var $name = $('#name');
  var $drink = $('#drink');

  function newOrder(){
    $elements.append('<li>name: '+ element.name+', drink: '+ element.drink+ <button data-id = 'element.id' class='remove'>Delete</button>'</li>');

  }

  //using Mustache
var orderTemplate = $('order-template').html();

function newOrder(order){
  $elements.append(Mustache.render(orderTemplate, order));
}

  //getting a array of JSON objects from the server and putting it into a list
  $.ajax({
    type: 'GET',
    url: '/api/orders'
    success: function(elements){
      $.each(elements, function(index, element){
        newOrder(element);
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
          newOrder(newOrder);
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
    });
  });

//Edit Orders
$orders.delegate('.editOrder', 'click', function(){
  var $li = $(this).closest('li');
    $li.find('input.name').val($li.find('span.name').html());
    $li.find('input.drink').val($li.find('span.drink').html());
    $li.addClass('edit');
  });
//cancel button
  $orders.delegate('.cancelEdit', 'click', function(){
    $li = $(this).closest('li').removeClass('edit');
    });
//save button
    $orders.delegate('.saveEdit', 'click', function(){
      var $li = $(this).closest('li');
//building the JSON
      var order = {
        name: $li.find('input.name').val(),
        drink: $li.find('input.drink').val()
      };

      $.ajax({
        type: 'PUT',
        url: '/api/orders/' + $li.attr('data-id'),
        data: order,
        success: function(newOrder){
          $li.find('span.name').html(order.name);
          $li.find('span.drink').html(order.drink);
          $li.removeClass('edit');
        },
        error: function(){
          alert('error updating order');
        }
      });
  });
});

});
