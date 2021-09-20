<template>
  <div class="cart">
    <h1>Carts</h1>
    <div class="product-wrapper">
        <table>
          <tbody>
            <tr class="row" v-for="(cart, idx) in carts" :key="idx">
              <td>
                <img :src="cart.image">
              </td>
              <td>
                <p>{{ cart.title }}</p>
              </td>
              <td>
                <h5>{{ cart.price }}</h5>
              </td>
              <!-- <td v-on:click=" setCarts(this.carts.splice(idx, 1))"> -->
              <td v-on:click="setCarts(deleteCart(idx))">
                  <div>hapus</div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr >
              <td colspan="4">
                <button @click="checkout()">Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>

    </div>
  </div>
</template>

<style scoped lang="scss">
$orange: #f37021;
$white: #fff;

// layout
.product-wrapper {
  margin: 0 auto;
  padding: 1em;
  width: 75%;

  table {
    margin: 0 auto;
    width: 70%;

    .row {
      border-bottom: #ccc 1px;
    }

    button {
      padding: 1em;
      background: $orange;
      color: $white;
      border: none;
      font-size: 1em;
      font-weight: bold;
      width: 100px;
      cursor: pointer;
      float: right;
    }
  }

  
}
</style>

<script>
import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'Cart',
  // methods: {
  //   checkout() {
  //     return this.$router.push('/checkout')
  //   },
  //   removeItem() {
  //     // Todo: action remove state
  //     console.log("hapus");
  //   }
  // },
  computed: {
    ...mapGetters(['carts']),
  },
  created() {
    this.getCarts()
  },
  methods: {
    ...mapActions([
      'getCarts',
      'setCarts'
    ]),
    deleteCart(idx) {
      var currentCarts = JSON.parse(JSON.stringify(this.carts))
      delete currentCarts[idx]; 
      var currentCartArr = Object.values(currentCarts);
      return currentCartArr
    }
  }
}
</script>