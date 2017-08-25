<template>
  <span>
    <label for="fn-search" class="show-for-sr">Search:</label>
    <input id="fn-search" 
        type="text" 
        v-model="searchTerm" 
        v-on:keyup.enter="runSearch" 
        v-on:blur="hideSearch" 
        :class="{'fn-open': SearchService.isSearchOpen}" 
        class="fn-animation">
    <i class="fa fa-search" v-on:mouseover="overSearch = true" v-on:mouseleave="overSearch = false" aria-hidden="true" v-on:click="openSearch"></i>
  </span>
</template>

<script>
import DB from '../plugins/db'
import SearchService from '../plugins/search'

export default {
  name: 'fn-search',
  data () {
    return {
      searchTerm: '',
      SearchService: SearchService,
      overSearch: false
    }
  },
  methods: {
    presentResults (r) {
      const that = this
      let results = r.join(',').split(',')
      // If there is only one result
      if (results.length === 1) {
        const params = results[0].split('-');
        const source = params[0] === 'b' ? 'blog' : 'projects';
        DB.getPostByKey(source, params[1])
          .then(post => {
            that.SearchService.isLoading = false
            that.$router.push(`/${source}/` + post.slug)
          })
      } else {
        // Create result list if there are multiple results
        const searchResults = []
        function iter() {
          if (results.length < 1) {
            // Redirect to search results page when results list is done
            SearchService.results = searchResults.slice(0)
            that.SearchService.isLoading = false
            that.$router.push('/search')
            return
          }
          const key = results.pop()
          const params = key.split('-');
          const source = params[0] === 'b' ? 'blog' : 'projects';
          // Get posts one-o-one, one of the downsides of Firebase (non-sql db)
          DB.getPostByKey(source, params[1])
            .then(post => {
              searchResults.push({
                id: params[1],
                source: source,
                title: post.title,
                slug: post.slug,
                desc: post.description,
                pubDate: post.pubDate
              })
              iter()
            })
        }
        iter()
      }
    },
    runSearch () {
      this.SearchService.isSearchOpen = false
      this.SearchService.isLoading = true
      const that = this
      const results = []
      SearchService['terms'] = this.searchTerm
      let keywords = this.searchTerm.replace(/[^a-zA-Z\d\s:]/g, '').split(' ');
      keywords = keywords.slice(0, 4);
      function iter () {
        const word = keywords.pop();
        if (!word) { return }
        // Get from DB if necessary
        DB.search(word)
          .then(posts => {
            results.push(posts)
            if (keywords.length > 0) { iter() }
            else { that.presentResults(results) }
          })
      }
      iter()
    },
    openSearch () {
      this.SearchService.isSearchOpen = !this.SearchService.isSearchOpen
      setTimeout(() => {
        if (this.SearchService.isSearchOpen) {
          document.getElementById('fn-search').focus()
        }
      }, 200)
    },
    hideSearch () {
      if (!this.overSearch) {
        this.SearchService.isSearchOpen = false
      }
    }
  }
}
</script>

<style></style>
