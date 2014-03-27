// codetest JS document

!function($) {
  $.ajax({
   method:"GET",
   url:"http://localhost:3300/products",
   success:function(res){
   	displayProducts(res);
   },
  })

  function displayProducts(products){
  	var allProducts = products[0]["products"].concat(products[1]["products"]);
  	for(var i = 0; i < allProducts.length; i++){
  		if(i <= 4){
  			$("#all").append("<li><img src='./images/products/"+ allProducts[i]["image"]+"''></img>")
  		}else if(i <= 9){
  			$("#best").append("<img src='./images/products/"+ allProducts[i]["image"]+"''></img>")
  		}else if (i <= 14){
  			$("#age").append("<img src='./images/products/"+ allProducts[i]["image"]+"''></img>")
  		} else {
  			$("#rest").append("<img src='./images/products/"+ allProducts[i]["image"] +"''></img>")
      }
  	}
  };
}(window.jQuery);