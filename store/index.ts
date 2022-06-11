export const state = () => ({
	authenticated: false,
	proccessing: false,
})

export const getters = {
	isAuthenticated(state) {
		return state.authenticated
	},
	isProcessing(state) {
		return state.proccessing
	}
}

export const mutations = {
	authenticate(state) {
		state.authenticated = true
	}
	proccessing(state) {
		state.proccessing = true
	}
}

export const actions = {
	signIn(context, payload) {
	}
	signOut(context, payload) {
	}
}
