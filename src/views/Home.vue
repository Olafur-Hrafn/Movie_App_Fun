<template>
<v-container>
<NavBar/>

<div class="movieList" v-if="topMovies">
<div @click="movieDetail(index)" class="movieItem" v-for="(item,index) in topMovies.results" :key="index">
<span v-if="showdetail == false">{{item.title}}</span> <span v-if="showdetail == true">{{item.vote_average}}</span>
</div>
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
          showdetail: false,
      }
    },
    methods:{
      changePrefix(){
        console.log(this.topMovies.results[1].title);
      },
      getPopularMovies() {
        this.$store.dispatch('getPopularMovies');
      },
      movieDetail(index){
     console.log(this.topMovies.results[index].overview);
    // alert('Rating : ' +this.topMovies.results[index].vote_average + ' ' + this.topMovies.results[index].overview);
     this.showdetail ? this.showdetail = false : this.showdetail = true;
    // this.showdetail == false ? this.showdetail == true : this.showdetail == false;
     console.log(this.showdetail);
    } 
    },
    created() {
      this.getPopularMovies();
    },
    
  }
</script>

<style scoped>
.movieList{
  width: 100%;
  margin: 100px auto;
  text-align: center;
  font-size: 1.5rem;
  padding: 5px;
}

.movieItem{
  margin-top: 5px;
  
}
</style>
