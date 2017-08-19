# 1 - XMLHttpRequest on the main thread

<link rel="alternate" type="application/rss+xml" title="FabioNolasco - Articles and Tips on Front-end Development" href="http://fabionolasco:3322/rss/">

The Firebase Script downgrade from webworkers to XMLHttpRequest if you disconnect. Right now the App is using goOffline and goOnline between requests, which leads to the warnings.

- [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.

More info here:
[https://stackoverflow.com/questions/32467144/firebase-synchronous-xmlhttprequest-deprecated?answertab=oldest#tab-top](https://stackoverflow.com/questions/32467144/firebase-synchronous-xmlhttprequest-deprecated?answertab=oldest#tab-top)
