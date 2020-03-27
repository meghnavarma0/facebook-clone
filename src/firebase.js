import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyBOiO21POsNJWQae4zaZ9rbttshS27bzPI',
	authDomain: 'facebook-clone-5f6a3.firebaseapp.com',
	databaseURL: 'https://facebook-clone-5f6a3.firebaseio.com',
	projectId: 'facebook-clone-5f6a3',
	storageBucket: 'facebook-clone-5f6a3.appspot.com',
	messagingSenderId: '777822048524',
	appId: '1:777822048524:web:244cf2f6f12b5613db7929',
	measurementId: 'G-6218B30S35'
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseApp.database().ref('users');

export const postRef = firebase.database().ref('posts');
