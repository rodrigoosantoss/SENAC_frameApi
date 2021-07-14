const form_alunos = Vue.component('form-alunos',{
    data: function(){ 
      return {
        aluno: {}
      }
    },
    methods:{
      salvar: function(){
        console.log(this.aluno);
        inserir(this.aluno, (aluno) => {
            console.log(aluno);
            alert(`PARABENS!!! O Aluno ${aluno.nome} adicionado com sucesso`)
            this.aluno={};
            this.limpar();
          });
      },
      limpar:function(){
        console.log(this.aluno);
        this.aluno={};
      }
    },
    template: '\
    <div id="form">\
      <label for="matricula">Matricula</label>\
      <input id="matricula" v-model="aluno.matricula"><br>\
      \
      <label for="nome">Nome</label>\
      <input id="nome" v-model="aluno.nome"><br>\
      \
      <label for="telefone">Telefone</label>\
      <input id="telefone" v-model="aluno.telefone"><br>\
      \
      <button v-on:click="salvar()">Adicionar Aluno</button>\
      <button v-on:click="limpar()">Limpar</button>\
    </div>'
  })
  