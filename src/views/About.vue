<template>
  <div class="about">
    <h1>THANKS FOR YOUR PURCHASE of {{itemName}}</h1>
    <h2>Learn more about Codeworks clothes</h2>
    <h3> OUR GOALS: </h3>
    <ul>
      <li>Efficiently unleash cross-media information without cross-media value.</li>
      <li>Quickly maximize timely deliverables for real-time schemas.</li>
      <li>Dramatically maintain clicks-and-mortar solutions without functional solutions.</li>
    </ul>
  </div>
</template>

<script>
  export default {

    props: ['itemName'],
    mounted(){
      if(!this.itemName){
        this.$router.push({name: 'home'})
      }
    }
  }

</script>