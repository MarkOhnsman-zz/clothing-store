<template>
    <div class="item">
        <h1>{{itemProp.name}} : {{itemProp.quantity}} </h1>
        <p>{{itemProp.description}}</p>
        <div v-if="itemProp.quantity > 0">
            <button @click="buy">BUY</button>
            <img :src="itemProp.img" alt="">
            <div v-if="itemProp.quantity < 5">
                <h4>Low STOCK!</h4>
            </div>
        </div>
        <div v-else>
            <h4>OUT OF STOCK</h4>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Item',
        props: ['itemProp'],
        data() {
            return {

            }
        },
        methods: {
            buy() {
                this.$emit('buy', this.itemProp)
            }
        }
    }

</script>
<style scoped>
    .item{
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>