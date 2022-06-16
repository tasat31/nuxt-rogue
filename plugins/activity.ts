import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { Context, Inject } from '@nuxt/types/app'

interface ActivityParamInterface {
	title: string
	content: string
}

export interface ActivityInterface {
　show: (params: ActivityParamInterface) => void
}

export default defineNuxtPlugin((ctx: Context, inject: Inject) => {
　const store = ctx.store
　const activity: ActivityInterface = {
  	show: (params) => {
  	　store.commit('activity/setActivity', {
  		title: params.title,
  		content: params.content,
  	　})
    }
  }
  inject('activity', activity)
})
