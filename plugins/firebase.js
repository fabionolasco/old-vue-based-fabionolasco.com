import * as Firebase from 'firebase'
import Vue from 'vue'

// Connect to Firebase
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

// Go offline - Only goOnline when start requesting new data
Vue.FIREBASE.db.goOffline()

// Create Refs
Vue.FIREBASE.getRef = (from) => {
  if (!Vue.FIREBASE.refs.hasOwnProperty(from)) {
    Vue.FIREBASE.refs[from] = Vue.FIREBASE.db.ref(from)
  }
  return Vue.FIREBASE.refs[from]
}

// Methods to get data
Vue.FIREBASE.getLastPosts = (from, count) => {
  const ref = Vue.FIREBASE.getRef(from)
  return ref.child('posts')
    .orderByKey()
    .limitToLast(3)
    .once('value')
}
