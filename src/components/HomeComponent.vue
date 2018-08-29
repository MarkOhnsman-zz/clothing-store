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
    computed:{
      items(){
        return this.$store.state.items
      }
    },
    methods: {
      addItem(item) {
        this.$store.dispatch('addItem', item)
      },
      buy(itemId) {
        this.$store.dispatch('buy', itemId)
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