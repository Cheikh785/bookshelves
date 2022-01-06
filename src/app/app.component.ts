import { Component } from '@angular/core';
// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	constructor() {
		const firebaseConfig = {
			apiKey: "AIzaSyAQ_ZAEXuVk_p4YvioRDCtP4HBHdsK_o1k",
			authDomain: "bookshelves-4.firebaseapp.com",
			databaseURL: "https://bookshelves-4-default-rtdb.firebaseio.com",
			projectId: "bookshelves-4",
			storageBucket: "bookshelves-4.appspot.com",
			messagingSenderId: "455204140607",
			appId: "1:455204140607:web:337614513b50ea65816a8a"
		  };
		  
		  // Initialize Firebase
		//   const app = initializeApp(firebaseConfig);
		firebase.initializeApp(firebaseConfig);
	}
}
