<template>
    <nav>
    <div class="nav-wrapper">
        <!-- {{seen}} -->
      <a href="/" class="brand-logo" style="left">Hacktiv Overflow</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-if="seen"><a @click="login">Login</a></li>
        <li v-else><a @click="add">Add Question</a></li>
        <li v-if="seen" @click="register"><a>Register</a></li>
        <li v-else><a @click="logout">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
    name:'navbar',
    data(){
        return{
            seen:true
        }
    },
    created(){
        var status = localStorage.getItem('token')
        if(status){
            this.seen=false
        }
        else{
            this.seen=true
        }
    },
    methods:{
        register:function(){
            this.$router.replace('/register')
        },
        login:function(){
            this.$router.replace('/login')
        },
        logout:function(){
            localStorage.removeItem('token')
            this.seen=true
            this.$router.replace('/main')
        },
        add:function(){
            this.$router.replace('/addQuest')
        }
    }
}
</script>
