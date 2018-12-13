import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDkZ3pN-yzvmzawL63NEVpvuP6w8YpLQPE",
    authDomain: "schedule-planner-c324b.firebaseapp.com",
    databaseURL: "https://schedule-planner-c324b.firebaseio.com",
    projectId: "schedule-planner-c324b",
    storageBucket: "schedule-planner-c324b.appspot.com",
    messagingSenderId: "956351763235"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
