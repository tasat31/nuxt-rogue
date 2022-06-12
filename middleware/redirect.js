export default function({ store, route, redirect }) {
	if (!store.getters['isAuthenticated']) {
		if (route.path !== '/login') {
			return redirect('/login')
		}
	} else {
		if (!store.getters['auth/isProceessing'] && route.path !== '/top') {
			return redirect('/top')
		}
		if (store.getters['auth/isProceessing'] && route.path !== '/main') {
			return redirect('/main')
		}
	}
}