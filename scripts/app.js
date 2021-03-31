// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyAx0-lAbOtnTgq56QUFVA8f-88WTUbjDyM",
    authDomain: "colegio-a4784.firebaseapp.com",
    projectId: "colegio-a4784",
    storageBucket: "colegio-a4784.appspot.com",
    messagingSenderId: "19012523176",
    appId: "1:19012523176:web:23e4b855eb38429dd31e9d",
    measurementId: "G-1DF53Y8Q4Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();
let alunos = [];

// // Ler todos os dados da coleção 
// db.collection("turmaA").get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         alunos.push(aluno);
//         console.log(aluno.nome)
//         console.log(aluno.notas)
//         console.log(aluno.advertencias)
//         console.log(alunos)
//     })
// })


//Ler um aluno especifico 
let docref = db.collection("turmaA").doc("zL4aqxTDjBSP25GGova8");
docref.get().then((doc)=>{
    let aluno = doc.data();

    console.log(aluno.nome)
})

let docref2 = db.collection("turmaA").doc("rKspn6TRtaBpkjFQLF8z");

docref2.get().then((doc)=>{
    let aluno =doc.data().nome
    console.log(aluno)
})

let docref3 = db.collection("turmaA").doc("selina");

docref3.get().then((doc)=>{
    let aluno = doc.data();
    console.log(`Aluno(a): ${aluno.nome}
                 Primeira nota: ${aluno.notas.nota1}
                 Segunda nota: ${aluno.notas.nota2}
                 Média: ${(aluno.notas.nota1 + aluno.notas.nota2) / 2}`)
})



