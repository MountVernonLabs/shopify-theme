$( function(){
  // DevEE.io Code Start

  $(".devnullsSelectPro").click(function(){
    $('.nullsWrapContainer').slideDown();
  });

  $(".devnullsWrapSelect").click(function(){
    if ($(".devnullsWrapSelect:checked").val() != "none"){
      $('.nullsCardContainer').slideDown();
      if (($(".devnullsCardSelect:checked").val() != "none") && ($(".devnullsCardSelect:checked").val() != "No thanks")){
        $('.nullsNoteContainer').slideDown();
      }
    }
    if ($(".devnullsWrapSelect:checked").val() == "none"){
      $('.nullsCardContainer').slideUp();
      $('.nullsNoteContainer').slideUp();
    }
  });

  $('.devnullsWrapSelect').on("change", function () {
    $('.nullsWrapImage').attr("src", $(".devnullsWrapSelect:checked").data("image"));
    $('.nullsWrapPrice').html( $(".devnullsWrapSelect:checked").data("price"));
  });

  $('.devnullsCardSelect').on("change", function () {
    $('.nullsCardImage').attr("src", $(".devnullsCardSelect:checked").data("image"));
    if (($(".devnullsCardSelect:checked").val() == "none") || ($(".devnullsCardSelect:checked").val() == "No thanks")){
      $('.nullsNoteContainer').slideUp();
    }
    else
    {
      $('.nullsNoteContainer').slideDown();
    }
  });

  // DevEE.io Code End

  $('.nullsAddButton').on("click",function () {
    
    var variantId;
    var properties;
    
    if($(".devnullsWrapSelect:checked").val() != "none"){
      variantId  = $(".devnullsWrapSelect:checked").val();
      properties = {"Note":'"'+$('.nullsNote').val()+'"',"Product": '"'+ $(".devnullsSelectPro:checked").val()+'"'};
      
      var params = { quantity: 1, id: variantId, properties: properties };
    
      $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        dataType: 'json',
        data: params,
        success: function () {
            document.location.href = "/cart";
        },
        error: function () {
          alert('Something went wrong, please refresh the page.');
        }
      });
    } else {
      alert('Please select one product.');
    }

    
    
    
  });
  
  /*function push_to_queue(variantID, quantity, properties, callback) {
    Shopify.queue.push({
      variantId: variantID,
      quantity: quantity,
      properties: properties
    });
    if (typeof callback === 'function') {
      //  callback();
    }
  }

  Shopify.queue = [];
  Shopify.moveAlong = function () {
    if (Shopify.queue.length) {
      var request = Shopify.queue.shift();
      Shopify.addItem(request.variantId, request.quantity, request.properties, Shopify.moveAlong);
    } else {
      document.location.href = '/cart';
    }
  };
  Shopify.addItem = function (id, qty, properties, callback) {
    var params = {
      quantity: qty,
      id: id,
      properties: properties
    };
    if (properties != false) {
      params.properties = properties;
    }
    
  }*/

  
});