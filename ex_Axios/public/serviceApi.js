const URI = 'http://localhost:3000/alunos';

function listarAlunos(ok, error) {
    axios
    .get(URI)
    .then(response=>{
        ok(response.data);
    })
    .catch(erro => error(erro));    
}

function inserir(aluno, ok, error) {
    axios
    .post(URI, aluno)
    .then(response => {
        ok(response.data)
    })
    .catch(erro => error(erro));

}


//Ou com Promises (listarAlunos):
/*
function listarAlunos() {
    return new Promise((resolve) => {
        axios.get(URI).then((response) => resolve(response.data));
    });
}
*/
