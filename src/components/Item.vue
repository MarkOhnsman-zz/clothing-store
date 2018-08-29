<template>
    <div class="item">
        <h1>{{itemProp.name}} : {{itemProp.stock}} </h1>
        <div v-if="itemProp.stock > 0">
            <button @click="buy">BUY</button>
            <img :src="itemProp.img" alt="">
            <div v-if="itemProp.stock < 5">
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
                this.$emit('buy', this.itemProp._id)
            }
        }
    }

</script>
<style>
</style>