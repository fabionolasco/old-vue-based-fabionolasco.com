import * as Firebase from 'firebase'
import Vue from 'vue'

const config = {
  apiKey: 'AIzaSyDnspSQgalmWbF469MbAJL4J6sR6e2YFv8',
  authDomain: 'fabionolasco-91850.firebaseapp.com',
  databaseURL: 'https://fabionolasco-91850.firebaseio.com',
  projectId: 'fabionolasco-91850',
  storageBucket: 'fabionolasco-91850.appspot.com',
  messagingSenderId: '471822727829'
}

Vue.config.firebase = Vue.config.firebase ? Vue.config.firebase : Firebase.initializeApp(config)
Vue.config.blogRef = Vue.config.firebase.database().ref('blog')
Vue.config.projectsRef = Vue.config.firebase.database().ref('projects')
