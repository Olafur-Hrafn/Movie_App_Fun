<template>
<v-container>
<NavBar/>

<v-btn @click="changePrefix()" >change</v-btn>

<div v-for="(item,index) in topMovies.results" :key="index">
{{item.title}} 
</div>


</v-container>

 
</template>

<script>
  import NavBar from '../components/NavBar'

  export default {
    name: 'Home',

    components: {
     NavBar,
    },
    computed: {
      user() {
        return this.$store.getters.user;
      },
      topMovies() {

        return this.$store.getters.popularMovies; 
      } 
    },
    data: function() {
      return {

      }
    },
    methods:{
      changePrefix(){
        console.log(this.topMovies.results[1].title);
      },
      getPopularMovies() {
        this.$store.dispatch('getPopularMovies');
      },
      
    },
    created() {
      this.getPopularMovies();
    }
  }
</script>
