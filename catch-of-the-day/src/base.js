import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-1OCNGfA39orieFTK8QCXVI9IIUNPG2Y",
    authDomain: "catch-of-the-day-stacey-fenton.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-stacey-fenton.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;