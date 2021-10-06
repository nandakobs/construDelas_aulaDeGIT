var nomeDoAluno1 = prompt("Digite o nome do Aluno(a)");
var notasDoAluno1 = prompt("Digite as três notas de separadas por virgula. Ex: 5,3,8");
notasDoAluno1 = notasDoAluno1.split(",");
nota1 = parseFloat(notasDoAluno1[0]);
nota2 = parseFloat(notasDoAluno1[1]);
nota3 = parseFloat(notasDoAluno1[2]);
var mediaDoAluno1 = nota1 + nota2 + nota3 / 3;
var nomeDoAluno2 = prompt("Digite o nome do Aluno(a)");
var notasDoAluno2 = prompt("Digite as três notas de separadas por virgula. Ex: 5,3,8");
notasDoAluno2 = notasDoAluno2.split(",");
nota1 = parseFloat(notasDoAluno2[0]);
nota2 = parseFloat(notasDoAluno2[1]);
nota3 = parseFloat(notasDoAluno2[2]);
var mediaDoAluno2 = nota1 + nota2 + nota3 / 3;
var nomeDoAluno3 = prompt("Digite o nome do Aluno(a)");
var notasDoAluno3 = prompt("Digite as três notas de separadas por virgula. Ex: 5,3,8");
notasDoAluno3 = notasDoAluno3.split(",");
nota1 = parseFloat(notasDoAluno3[0]);
nota2 = parseFloat(notasDoAluno3[1]);
nota3 = parseFloat(notasDoAluno3[2]);
var mediaDoAluno3 = nota1 + nota2 + nota3 / 3;
var nomeDoAluno4 = prompt("Digite o nome do Aluno(a)");
var notasDoAluno4 = prompt("Digite as três notas de separadas por virgula. Ex: 5,3,8");
notasDoAluno4 = notasDoAluno4.split(",");
nota1 = parseFloat(notasDoAluno4[0]);
nota2 = parseFloat(notasDoAluno4[1]);
nota3 = parseFloat(notasDoAluno4[2]);
var mediaDoAluno4 = nota1 + nota2 + nota3 / 3;
var nomeDoAluno5 = prompt("Digite o nome do Aluno(a)");
var notasDoAluno5 = prompt("Digite as três notas de separadas por virgula. Ex: 5,3,8");
notasDoAluno5 = notasDoAluno5.split(",");
nota1 = parseFloat(notasDoAluno5[0]);
nota2 = parseFloat(notasDoAluno5[1]);
nota3 = parseFloat(notasDoAluno5[2]);
var mediaDoAluno5 = nota1 + nota2 + nota3 / 3;
if (mediaDoAluno1 >= 5){
    alert("Aluno(a) " + nomeDoAluno1 + "Aprovado(a)!");
}else {
    alert("Aluno(a) " + nomeDoAluno1 + " Reprovado(a)!");
}
if (mediaDoAluno2 >= 5){
    alert("Aluno(a) " + nomeDoAluno2 + " Aprovado(a)!");
}else {
    alert("Aluno(a) " + nomeDoAluno2 + " Reprovado(a)!");
} 
if (mediaDoAluno3 >= 5){
    alert("Aluno(a) " + nomeDoAluno3 + " Aprovado(a)!");
}else {
    alert("Aluno(a) " + nomeDoAluno3 + " Reprovado(a)!");
}
if (mediaDoAluno4 >= 5){
    alert("Aluno(a) " + nomeDoAluno4 + " Aprovado(a)!");
}else {
    alert("Aluno(a) " + nomeDoAluno4 + " Reprovado(a)!");
}
if (mediaDoAluno5 >= 5){
    alert("Aluno(a) " + nomeDoAluno5 + " Aprovado(a)!");
}else {
    alert("Aluno(a) " + nomeDoAluno5 + " Reprovado(a)!");
}