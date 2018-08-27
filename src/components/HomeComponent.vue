<template>
  <div class="home">
    <AddItem v-on:createItem="addItem" />
    <div v-for="itemInstance in items" class="product">
      <Item v-on:buy="buy" :itemProp="itemInstance" />
    </div>
  </div>
</template>

<script>
  import AddItem from "@/components/AddItem"
  import Item from "@/components/Item"

  export default {
    name: 'HomeComponent',
    data() {
      return {
        newItem: {},
        items: [{
          name: 'Jake\'s T-shirt',
          img: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Black-T-Shirt-PNG-Transparent-Image-500x491.png',
          stock: 10
        }, {
          name: 'Zach\'s Hat',
          img: 'https://banner2.kisspng.com/20171216/fbc/baseball-cap-png-image-5a34e05ab38920.7286263515134147467354.jpg',
          stock: 3
        }, {
          name: 'Darryl\'s Thermos',
          img: 'https://i.pinimg.com/originals/43/e1/18/43e118ce3527dfdbb30c74dfca033020.jpg',
          stock: 1
        }]
      }
    },
    methods: {
      addItem(item) {
        this.items.push(item)
      },
      buy(item) {
        item.stock--
      }
    },
    components: {
      AddItem,
      Item
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    display: block
  }
</style>