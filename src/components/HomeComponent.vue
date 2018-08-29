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
        newItem: {}
      }
    },
    mounted(){
      this.$store.dispatch('getClothes')
    },
    computed:{
      items(){
        return this.$store.state.clothes
      }
    },
    methods: {
      addItem(item) {
        this.$store.dispatch('addItem', item)
      },
      buy(item) {
        this.$store.dispatch('buy', item)
      }
    },
    components: {
      AddItem,
      Item
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  button {
    display: block
  }
  img {
    width: 400px
  }
</style>