import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyB6poboupXEwezvVPUxJXuzAcuQBvNv42k",
    authDomain: "pokedex-d8eca.firebaseapp.com",
    databaseURL: "https://pokedex-d8eca-default-rtdb.firebaseio.com",
    projectId: "pokedex-d8eca",
    storageBucket: "pokedex-d8eca.appspot.com",
    messagingSenderId: "345746541420",
    appId: "1:345746541420:web:d14f8a7b6d984e85188149",
    measurementId: "G-P8FH9Z7LLM"
    };



    const app =  initializeApp(firebaseConfig);

    export const db = getDatabase(app)