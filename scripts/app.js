// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// var firebaseConfig = {
//     apiKey: "AIzaSyAx0-lAbOtnTgq56QUFVA8f-88WTUbjDyM",
//     authDomain: "colegio-a4784.firebaseapp.com",
//     projectId: "colegio-a4784",
//     storageBucket: "colegio-a4784.appspot.com",
//     messagingSenderId: "19012523176",
//     appId: "1:19012523176:web:23e4b855eb38429dd31e9d",
//     measurementId: "G-1DF53Y8Q4Q"
// };


// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const TURMA = 'turmaA'
// let db = firebase.firestore();
// let auth = firebase.auth()
// let email = 'novoteste@teste.com';
// let senha = '123abc';



























function login() {

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {

        auth.signInWithEmailAndPassword(email, senha)
            .then(loggedUser => {
                console.log(auth.currentUser)
            }).catch(erro => {
                console.log(erro)
            })
    }).catch(erro => {
        console.log(erro)
    })



}

// let user = auth.currentUser;
// console.log(user)

// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log("usuário logado", user)
//     } else {
//         console.log("ninguem logado")
//     }
// })

function logout() {
    auth.signOut().
        then(obj => {
            console.log("usuário foi deslogado");
        }).catch(erro => {
            console.log(erro)
        });
}
// setTimeout(login, 2000)














// criarUsuário('lais@pinheiro.com', '123456')

//creado usuário no Authentication Firebase
function criarUsuário(email, senha) {
    auth.createUserWithEmailAndPassword(email, senha)
        .then(user => {
            alert("usuario criado com sucesso", user)
        }).catch(erro => {
            alert(erro.message)
            console.log(erro.code, erro.message)
        })
}


// db.collection(TURMA).get().then(snapshot =>{
//     snapshot.forEach(doc=>{
//         let aluno = doc.data().nome;

//         // console.log(aluno)
//     })
// })

// db.collection(TURMA).doc('MgpQP1yWU5EFI6997WwQ').get().then(snapshot=>{
//     let aluno = snapshot.data();

//     // console.log(`Nome: ${aluno.nome} 
//     // Sobrenome: ${aluno.sobrenome}
//     // idade: ${snapshot.data().idade}`)

// })

// db.collection(TURMA).where('nome', '<=', 'a' ).get().then(snapshot=>{
//     snapshot.forEach(doc=>{
//         let aluno = doc.data();

//         console.log(aluno.sobrenome)
//     })
// })

let addAluno = (colecao, nome, sobrenome, idade, n1, n2) => {

    db.collection(colecao).add(
        {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,
            notas: { nota1: n1, nota2: n2 }
        }).then(doc => {
            console.log('inserido', doc.id)
        }).catch(erro => {
            console.log(erro)
        })

}



// addAluno(TURMA, 'Leticia','Pinheiro',26, 7,6);

// db.collection(TURMA).doc('Jonas').update(
//     {
//         Sobrenome: "Gomes",

//     }).then(doc=>{
//         console.log('inserido', doc)
//     }).catch(erro=>{
//         console.log(erro)
//     })



// //OnSnapShot para toda a collection 
// db.collection(TURMA).onSnapshot(snapshot =>{
//     snapshot.forEach((doc, i)=>{
//         let aluno = doc.data().nome;
//         console.log(aluno)
//     })
// })

// //Onsnapshat para usuário em especifico 
// db.collection(TURMA).doc('selina').onSnapshot(doc=>{
//     let aluno = doc.data();
//     console.log(aluno)});


// //Onsnapshot para usuário especifico com WHERE
// db.collection(TURMA).where('idade', '<', 25 ).onSnapshot(snapshot =>{
//     snapshot.forEach(doc=>{
//         let aluno = doc.data();
//         console.log(aluno.nome, aluno.idade)
//     })

// })


// // Add um novo documento na colletcion desejada e insere Id automático
// db.collection(TURMA).add({
//     nome: 'Junior',
//     sobrenome: 'Batista',
//     notas: {nota1: 5, nota2: 2},
// }).then(doc=>{
//     console.log('inserido com sucesso', doc.id)
// }).catch(erro=>{
//     console.log(erro)
// })

// // Set da a opção de criar um novo documento setando o id e sobrescreve todo o documento, porem se colocar o objeto merge no final, nao sobrescreve, só atualiza ou cria novo documento.
// db.collection(TURMA).doc('k24P1urRYPyTq6hSKkqW').set(
//     {
//         nome:'Adear'
//     },{merge:true}
//     ).then(doc=>{
//         console.log('inserido')
//     })

// Update só atualiza o campo escrito (se for atualizar maps colocar entre aspas)
// db.collection(TURMA).doc('k24P1urRYPyTq6hSKkqW').update(
//     {
//         'notas.nota1': 5,
//         cidades: firebase.firestore.FieldValue.arrayUnion('PB','AM'),
//         faltas:firebase.firestore.FieldValue.increment(5),

//         // arrayRemove para remover itens da array
//         // Para decrementar e só passar assim increment(-5)
//         // Para deletar todo o documento é so trocar o método update por delete.
//     }
//     ).then(doc=>{
//         console.log('inserido')
//     }).catch(erro=>{
//         console.log(erro)
//     })



// // Ler todos os dados da coleção 
// db.collection("turmaA").get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome)
//         console.log(aluno.notas)
//         console.log(aluno.advertencias)
//         console.log(alunos)
//     })
// })


// //Ler um aluno especifico 
// let docref = db.collection("turmaA").doc("zL4aqxTDjBSP25GGova8");
// docref.get().then((doc)=>{
//     let aluno = doc.data();

//     console.log(aluno.nome)
// })

// let docref2 = db.collection("turmaA").doc("rKspn6TRtaBpkjFQLF8z");

// docref2.get().then((doc)=>{
//     let aluno =doc.data().nome
//     console.log(aluno)
// })

// let docref3 = db.collection("turmaA").doc("selina");

// docref3.get().then((doc)=>{
//     let aluno = doc.data();
//     console.log(`Aluno(a): ${aluno.nome}
//                  Primeira nota: ${aluno.notas.nota1}
//                  Segunda nota: ${aluno.notas.nota2}
//                  Média: ${(aluno.notas.nota1 + aluno.notas.nota2) / 2}`)
// })


// db.collection('turmaA').where('idade', '<=', 23).get().then( snapshot =>{
//     snapshot.forEach(doc =>{
//         let alunos = doc.data()
//         console.log(alunos.nome, alunos.idade)
//     })
// })

// //Deletando um documento inteiro
// db.collection(TURMA).doc('2k51aSMDD9qz26gUBw0C').delete().then(
//     console.log('documento deletado')
// ).catch(erro=>{
//     console.log(erro)
// })

// //Deletando um campo de um documento em especifico
// db.collection(TURMA).doc('rKspn6TRtaBpkjFQLF8z').update({
//     advertencias: firebase.firestore.FieldValue.delete(),
// })
