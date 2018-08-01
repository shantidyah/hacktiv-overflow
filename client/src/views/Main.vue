<template>
  <div class="main">
    <Navbar/>
		<div class="container">
				<div class="card blue-grey darken-1" v-for="quest in listQuest.data" :key=quest[key]>
					<!-- {{contentBlog}} -->
					<div class="card-content white-text">
						<span class="card-title">{{quest.user.name}}</span>
						<p align="center" v-html="quest.question"></p>
						<button @click="deletequest(quest._id)">delete</button>
						<!-- <button @click="edit(quest._id)">edit</button> -->
						<!-- {{quest.user._id}} -->
					</div>
				</div>
		</div>
		<!-- {{listQuest.data}} -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'main',
    components: {
        Navbar
		},
		data(){
			return{
				listQuest:[]
			}
		},
		created(){
			this.listData()
		},
		methods:{
			listData:function(){
				this.listQuest = ''
				axios.get('http://localhost:3000/questions')
				.then(quests=>{
					console.log(quests);
					
					this.listQuest = quests
				})
				.catch(err=>{
					console.log(err);
					
				})
			},
			deletequest:function(id){
				axios.delete(`http://localhost:3000/questions/${id}`)
				.then(quest=>{
					console.log(quest)
					// this.$router.replace('/main')
					window,location = '/main'
				})
				.catch(err=>{
					console.log(err)
				})
			},
			update:function(){

			}
		}
}
</script>
