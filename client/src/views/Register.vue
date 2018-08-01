<template>
  <div class="regist">
    <Navbar/>
    <h3>Register</h3>
			<div class="row">
				<div class="input-field col s6">
					<i class="material-icons prefix">account_box</i>
					<input id="icon_name" type="text" class="validate" v-model="name">
					<label for="icon_name">Name</label>
				</div>
			</div>
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
			<button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="register">Register
						<i class="material-icons right">send</i>
			</button>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'regist',
    components: {
        Navbar
		},
		data(){
			return{
				name:'',
				email:'',
				password:''
			}
		},
		methods:{
			register: function(){
				console.log("mausk regist sebelom axios")
				
				axios.post('http://localhost:3000/register',{
					name:this.name,
					email:this.email,
					password:this.password
				})
				.then(user=>{
					console.log("masuk regist client",user);
					this.name=''
					this.email=''
					this.password=''
					swal("Good job!", "You success register!", "success");
				})
				.catch(err=>{
					console.log(err);
				})
			}
		}
}
</script>
