import { createMutations } from 'direct-vuex'
import { State } from '@/store/root/state'

export const mutations = createMutations<State>()({
  SET_ME(state, me: Schemas.Me): void {
    state.me = me
  },
})
