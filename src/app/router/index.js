/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName:"home" */ '../views/HomeView')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName:"about" */ '../views/AboutView')
	},
	{
		path: '/profile',
		name: 'profile',
		component: () =>
			import(/* webpackChunkName:"profile" */ '../views/ProfileView')
	}
]

const router = new Router({
	linkExactActiveClass: 'link-active',
	routes,
	mode: 'hash',
	base: '/',
	scrollBehavior() {
		window.scrollTo(0, 0)
	}
})

router.beforeEach((to, from, next) => {
	if (to.name === 'profile' && store.state.isconnected === false) {
		next({ name: 'home' })
	} else {
		next()
	}
})

export default router
