import Vue from 'vue'
Vue.mixin({
	data(){
		return {
			url: {
				google: 'https://play.google.com/store/apps/details?id=com.movv',
				apple: 'https://apps.apple.com/kr/app/apple-store/id1482366235',
			}
		}
	},
	methods: {
		google() {
			window.open('about:blank').location.href = this.url.google
		},
		apple() {
			window.location.href = this.url.apple
		},

	},
})
