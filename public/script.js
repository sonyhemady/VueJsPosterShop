var PRICE = 9.99;

new Vue({
  el: "#app",

  data: {
    //total: 0,
    items: [
      { id: 1, title: "Item 1" },
      { id: 2, title: "Item 2" },
      { id: 3, title: "Item 3" }
    ],
    cart: [],
    search: ""
  },

  methods: {
    onSubmit: function() {
      console.log(this.search);
    },

    addItem: function(index) {
      //   console.log(index);

      this.total += PRICE;
      var item = this.items[index];
      var found = false;

      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          found = true;
          this.cart[i].qty++;
          break;
        }
      }

      if (!found) {
        //previous
        // push the array of method this.cart.push({this.items[index]})

        //enhanced at 22. Adding quantity to cart items
        //   .push() the object
        this.cart.push({
          id: item.id,
          title: item.title,
          qty: 1,
          price: PRICE
        });
      }
    },

    inc: function(item) {
      item.qty++;
      this.total += PRICE;
      // console.log(item);
    },

    dec: function(item) {
      item.qty--;
      this.total -= PRICE;
      // console.log(item);
      if (item.qty <= 0) {
        for (var i = 0; this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
            var r = this.cart[i].id;
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    }
  },

  filters: {
    currency: function(price) {
      return "$".concat(price.toFixed(2));
    }
  }
});
