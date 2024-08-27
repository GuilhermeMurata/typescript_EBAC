type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}