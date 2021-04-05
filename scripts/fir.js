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

let escrever = ()=>{
    db.collection('lista').add(
        {
            title: "Novo objeto",
            numero: Math.random()*10
        }
        )
        .then(doc=>{
            console.log(doc)
        })
        .catch(erro =>{
            console.log(erro)
        })
}

ler();