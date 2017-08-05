import Vue from 'vue'

const DB = {
  getRef,
  checkDbVersion,
  getLastPosts,
  getPost,
  getLongDate
}

export default DB

// GET LONG DATE
function getLongDate (source) {
  const baseDate = new Date(source.pubDate)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dd = baseDate.getDate();
  const mm = months[baseDate.getMonth()];
  const yyyy = baseDate.getFullYear();
  if (dd > 3 && dd < 21) { dd += 'th' }
  else {
    switch (dd % 10) {
      case 1: dd += 'st';
      case 2: dd += 'nd';
      case 3: dd += 'rd';
      default: dd += 'th';
    }
  }
  return mm + ' ' + dd + ', ' + yyyy
}

// GET SPECIFIC POST
function getPost (from, id) {
  // First return promise
  const promise = new Promise((resolve) => {
    // Get data from Firebase
    Vue.FIREBASE.db.goOnline()
    const ref = DB.getRef(from)
    // Get Content
    ref.child('posts')
      .orderByChild('slug')
      .equalTo(id)
      .once('value')
      .then((snapshot) => {
        const keys = Object.keys(snapshot.val())
        resolve(snapshot.val()[keys[0]])
        Vue.FIREBASE.db.goOffline()
      })
  })
  return promise
}

// CREATE REFS
function getRef (from) {
  if (!Vue.FIREBASE.refs.hasOwnProperty(from)) {
    Vue.FIREBASE.refs[from] = Vue.FIREBASE.db.ref(from)
  }
  return Vue.FIREBASE.refs[from]
}

// CHECK DB VERSION, TO SEE IF WE NEED TO PURGE LOCAL STORAGE
function checkDbVersion () {
  if (!localStorage) { return }
  const promise = new Promise((resolve) => {
    Vue.FIREBASE.db.goOnline()
    const refName = 'version'
    const ref = DB.getRef(refName)
    ref.once('value')
      .then((snapshot) => {
        const version = snapshot.val()
        let localVersion = localStorage.getItem(refName)
        if (!localVersion) {
          localStorage.setItem(refName, version)
          localVersion = version
        } else
        if (localVersion.toString() !== version.toString()) {
          localStorage.removeItem('blogposts')
          localStorage.removeItem('projectsposts')
          localStorage.setItem(refName, version)
        }
        Vue.FIREBASE.db.goOffline()
        resolve(true)
      })
  })
  return promise
}

// GET LAST POSTS
function getLastPosts (from, count, orderBy = 'orderByKey', orderField) {
  // First return promise
  const promise = new Promise((resolve) => {
    // Secondly Check Version of DB
    DB.checkDbVersion().then(() => {
      const child = 'posts'
      // If localStorage has value for requested content, serve that content
      if (localStorage) {
        const fromLocal = localStorage.getItem(from + child)
        if (fromLocal) {
          resolve(JSON.parse(fromLocal))
        } else {
          // Otherwise go get data from Firebase
          getPost()
        }
      } else {
        // Otherwise go get data from Firebase
        getPost()
      }
      // Get data from Firebase
      function getPost () {
        Vue.FIREBASE.db.goOnline()
        const args = []
        if (orderField) { args.push(orderField) }
        const ref = DB.getRef(from)
        // Get Content
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
      }
    })
  })
  return promise
}
