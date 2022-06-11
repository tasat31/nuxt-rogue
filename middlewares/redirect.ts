import ScreenMode from '@consts/ScreenMode'

export default function({ store, redirect }) {
	if (!store.getters['isAuthenticated']) {
		return redirect('/login')
	}

	if (!store.getters['isProccessing']) {
		return redirect('/top')
	} else {
		return redirect('/main')
	}
}