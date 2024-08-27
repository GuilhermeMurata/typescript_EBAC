"use strict";
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Front-end"],
        idade: 27
    },
    {
        nome: "Ana",
        cursos: ["Back-end"],
        idade: 22
    },
];
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
