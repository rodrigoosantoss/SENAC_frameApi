const tabela_alunos = Vue.component('tabela-alunos',{
    props:['lista'],
    mounted () {
      //ver serviceApi.js
      listarAlunos((data) => this.lista = data);
    },
    template: '<table>\
    <tr>\
        <th>MATRICULA</th>\
        <th>NOME</th>\
        <th>TELEFONE</th>\
    </tr>\
    <tr v-for="item of lista">\
        <td>{{item.matricula}}</td>\
        <td>{{item.nome}}</td>\
        <td>{{item.telefone}}</td>\
    </tr>\
  </table>'
  })
  