import * as Firebase from 'firebase'
import Vue from 'vue'

if (!Vue.FIREBASE) {
  // CONNECT TO FIREBASE
  Vue.FIREBASE = { refs: {} }
  Vue.FIREBASE.credentials = {
    apiKey: 'AIzaSyDnspSQgalmWbF469MbAJL4J6sR6e2YFv8',
    authDomain: 'fabionolasco-91850.firebaseapp.com',
    databaseURL: 'https://fabionolasco-91850.firebaseio.com',
    projectId: 'fabionolasco-91850',
    storageBucket: 'fabionolasco-91850.appspot.com',
    messagingSenderId: '471822727829'
  }
  Vue.FIREBASE.app = Vue.FIREBASE.app ? Vue.FIREBASE.app : Firebase.initializeApp(Vue.FIREBASE.credentials)
  Vue.FIREBASE.db = Vue.FIREBASE.app.database()

  // GO OFFLINE - ONLY GO ONLINE WHEN SCRIPT START REQUESTING NEW DATA
  // IN ORDER TO MAXIMIZE POTENTIAL OF FREE ACCOUNT WITH FIREBASE
  Vue.FIREBASE.db.goOffline()
}
