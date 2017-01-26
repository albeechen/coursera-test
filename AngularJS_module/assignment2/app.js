(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListBuyController', ShoppingListBuyController)
.controller('ShoppingListBroughtController', ShoppingListBroughtController)
.service('ShoppingListService', ShoppingListService);

ShoppingListBuyController.$inject = ['ShoppingListService'];
function ShoppingListBuyController(ShoppingListService) {
	var buyitems = this;

	buyitems.items = ShoppingListService.getItems();
	buyitems.broughtItem = function (itemIndex) {
		try {
			ShoppingListService.broughtItem(itemIndex);
		}catch(error) {
			buyitems.Message = error.message;
		}
	}

}

ShoppingListBroughtController.$inject = ['ShoppingListService'];
function ShoppingListBroughtController(ShoppingListService) {
	var broughtitems = this;

	broughtitems.broughtitems = ShoppingListService.getbroughtItems();
}

function ShoppingListService() {
	var service = this;

  	// List of shopping items
  	var items = [];
  	var broughtitems = [];

  	for(var i = 0; i < 5; i++){
	    var item = {
	      name: "cookies",
	      quantity: i + 5
	    };
	    items.push(item);
  	};


  	service.broughtItem = function (itemIdex) {
  		broughtitems.push(items[itemIdex]);
		items.splice(itemIdex, 1);
    	if(items.length === 0)
      		throw new Error("Everything is bought!");
  	};	

  	service.getItems = function () {
    	return items;
  	};

  	service.getbroughtItems = function () {
    	return broughtitems;
  	};
}

})();