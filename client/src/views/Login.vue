<template>
  <div class="login">
    <Navbar/>
    <h3>LOGIN</h3>
			<!-- <div class="row">
				<div class="input-field col s6">
					<i class="material-icons prefix">account_box</i>
					<input id="icon_name" type="text" class="validate" v-model="name">
					<label for="icon_name">Name</label>
				</div>
			</div> -->
			<div class="row">
				<div class="input-field col s6">
					<i class="material-icons prefix">email</i>
					<input id="icon_email" type="text" class="validate" v-model="email">
					<label for="icon_email">Email</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s6">
					<i class="material-icons prefix">enhanced_encryption</i>
					<input id="icon_pass" type="password" class="validate" v-model="password">
					<label for="icon_pass">Password</label>
				</div>
			</div>
			<button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="login">Login
						<i class="material-icons right">send</i>
			</button>
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
				email:'',
				password:''
			}
		},
		methods:{
			login:function(){
				axios.post('http://localhost:3000/login',{
					email:this.email,
					password:this.password
				})
				.then(result=>{
					if(result.data=='error'){
						swal("", "Password/Email Wrong", "warning");
					}
					else{
						// console.log("ini hasil dari methods login",result.data);
						localStorage.setItem('token',result.data)
						// swal("Good job!", "You clicked the button!", "success");
            this.$router.replace('/main')
						
					}
				})
				.catch(err=>{
					console.log(err);
					
				})
			}
		}
}
</script>
