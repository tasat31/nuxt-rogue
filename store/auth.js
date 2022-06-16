export const state = () => ({
	authenticated: false,
	proccessing: false,
})

export const getters = {
	isAuthenticated(state) {
		return state.authenticated
	},
	isProceessing(state) {
		return state.proccessing
	}
}

export const mutations = {
	authenticate(state, val) {
		state.authenticated = val
	},
	proccessing(state, val) {
		state.proccessing = val
	}
}

export const actions = {
	signIn(context, payload) {
		context.commit('authenticate', true)
	},
	signOut(context, payload) {
		context.commit('authenticate', false)
	}
}
