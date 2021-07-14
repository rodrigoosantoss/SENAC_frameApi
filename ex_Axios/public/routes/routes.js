

const routes = [
  { path: '/cadastro', component: form_alunos},
  { path: '/lista', component: tabela_alunos }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


var app = new Vue({
  router,
	el: "#cadastro",
  created: function(){
    console.log("Iniciando...")
  }
 
});