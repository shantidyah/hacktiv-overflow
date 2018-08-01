<template>
    <div class='addquest'>
        <Navbar/>
        <!-- {{question}} -->
      <div class="container">
        <h3>Add Question</h3>
        <wysiwyg v-model="question"/>
        <input type="button" value="save" @click="add">
      </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'login',
    components: {
        Navbar
    },
    data(){
      return{
        question:''
      }
    },
    methods:{
      add:function(){
        var self = this
        var token = localStorage.getItem('token')
        axios.post('http://localhost:3000/questions/add',{         
          question:self.question
        },{
            headers:{
                token:token
            }  
        })
        .then(quest=>{
          console.log("masuk add question client",quest);
          	swal("Good job!", "You success add the question!", "success");
        })
        .catch(err=>{
          console.log(err);
          
        })
      }
    }
}
</script>

<style>
    @import "~vue-wysiwyg/dist/vueWysiwyg.css"

</style>