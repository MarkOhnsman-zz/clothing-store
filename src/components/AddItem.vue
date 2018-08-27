<template>
    <div class="add-item">
        <form @submit.prevent="createItem">
            <input type="text" placeholder="name" v-model='newItem.name' required>
            <input type="url" placeholder="image" v-model='newItem.img' required>
            <input type="number" placeholder="stock" v-model='newItem.stock' required>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'AddItem',
        data() {
            return {
                newItem: {}
            }
        },
        methods: {
            createItem() {
                this.$emit('createItem', this.newItem)
                this.newItem = {}
            }
        }
    }

</script>
<style>
</style>