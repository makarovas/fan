import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyDyawWlas1mrTuSUgvkMK24sbHf6zG0uB4",
	authDomain: "fanaticoz.firebaseapp.com",
	databaseURL: "https://fanaticoz.firebaseio.com",
	projectId: "fanaticoz",
	storageBucket: "fanaticoz.appspot.com",
	messagingSenderId: "789768155519",
	appId: "1:789768155519:web:0479304a248d75f0"
};
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
// firebaseDB.ref('matches').once('value').then((snapshot) => {
// 	console.log(snapshot.val())
// })

const firebaseMatches = firebaseDB.ref('matches');


export {
	firebase,
	firebaseMatches,
}