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
  Vue.FIREBASE.db.goOffline()

  // CREATE REFS
  Vue.FIREBASE.getRef = (from) => {
    if (!Vue.FIREBASE.refs.hasOwnProperty(from)) {
      Vue.FIREBASE.refs[from] = Vue.FIREBASE.db.ref(from)
    }
    return Vue.FIREBASE.refs[from]
  }

  // CHECK DB VERSION, TO SEE IF WE NEED TO PURGE LOCAL STORAGE
  Vue.FIREBASE.checkDbVersion = () => {
    if (!localStorage) { return }
    Vue.FIREBASE.db.goOnline()
    const refName = 'version'
    const ref = Vue.FIREBASE.getRef(refName)
    ref.once('value')
      .then((snapshot) => {
        const version = snapshot.val()
        let localVersion = localStorage.getItem(refName)
        if (!localVersion) {
          localStorage.setItem(refName, version)
          localVersion = version
        }
        if (localVersion.toString() !== version.toString()) {
          localStorage.clear()
          localStorage.setItem(refName, version)
        }
        Vue.FIREBASE.db.goOffline()
      })
  }
  Vue.FIREBASE.checkDbVersion()

  // METHOD - GET LAST POSTS
  Vue.FIREBASE.getLastPosts = (from, count, orderBy = 'orderByKey', orderField) => {
    const child = 'posts'
    // If localStorage has value, serve that
    if (localStorage) {
      const fromLocal = localStorage.getItem(from + child)
      if (fromLocal) {
        const promise = new Promise((resolve) => {
          resolve(JSON.parse(fromLocal))
        })
        return promise
      }
    }
    // Otherwise get data from Firebase
    const promise = new Promise((resolve) => {
      Vue.FIREBASE.db.goOnline()
      const args = []
      if (orderField) { args.push(orderField) }
      const ref = Vue.FIREBASE.getRef(from)
      ref.child(child)[orderBy](...args)
        .limitToLast(count)
        .once('value')
        .then((snapshot) => {
          if (localStorage) {
            localStorage.setItem(from + child, JSON.stringify(snapshot.val()))
          }
          resolve(snapshot.val())
          Vue.FIREBASE.db.goOffline()
        })
    })
    return promise
  }
}
