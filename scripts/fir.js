// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB_5r90ZVur1u7r3hJ7fh2s8N4wgnRQuVk",
    authDomain: "teste-57225.firebaseapp.com",
    projectId: "teste-57225",
    storageBucket: "teste-57225.appspot.com",
    messagingSenderId: "1065204927038",
    appId: "1:1065204927038:web:6025f9f4fa75d724b49f6f",
    measurementId: "G-C1696BQFMR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();
let auth = firebase.auth();





let ler = () =>{
    db.collection('lista').get().then(snapshot=>{
        snapshot.forEach(doc=>{
            let lista = doc.data();
    
            console.log(lista)
        })
    }).catch(erro=>{
        console.log(erro)
    })
}

let escrever = (obj)=>{
    db.collection('lista').add(
        {
            title: obj,
            numero: Math.random()*10
        }
        )
        .then(doc=>{
            console.log("documento salvo")
        })
        .catch(erro =>{
            console.log(erro)
        })
}


let logar = () =>{

    let usuario = "lucasmetron@gmail.com";
    let senha = "32013454"

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{
        auth.signInWithEmailAndPassword(usuario, senha)
        .then(logado =>{
            console.log("login com sucesso")
            escrever("moto")
        }).catch(erro=>{
            console.log(erro)
        })
    })
}

let deslogar = () =>{
    auth.signOut().
    then(obj => {
        console.log("usuário foi deslogado");
    }).catch(erro => {
        console.log(erro)
    });
}


// logar();
// deslogar();
escrever("teste");