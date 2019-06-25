import Vue from 'vue'
import Vuex from 'vuex'
import { RepositoryFactory } from './repositories/RepositoryFactory'
const ReservationsRepository = RepositoryFactory.set('reservations')
const GroupsRepository = RepositoryFactory.set('groups')
const UsersRepository = RepositoryFactory.set('users')
const RoomsRepository = RepositoryFactory.set('rooms')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: {},
    allUsers: [],
    myReservations: [],
    revHeaders: [
      { text: '識別id', value: 'id' },
      { text: 'グループID', value: 'group_id' },
      { text: '部屋ID', value: 'room_id' },
      { text: '日付', value: 'date' },
      { text: '開始時刻', value: 'time_start' },
      { text: '終了時刻', value: 'time_end' },
      { text: '場所', value: 'room.place' }
    ],
    myGroups: [],
    groupHeaders: [
      { text: 'グループ名', value: 'name' },
      { text: '人数', value: 'members.length' }
    ],
    allowedRooms: [],
    roomHeaders: [
      { text: '日付', value: 'date' },
      { text: '場所', value: 'place' },
      { text: '開始時刻', value: 'time_start' },
      { text: '終了時刻', value: 'time_end' }
    ]
  },
  mutations: {
    changeMyReservations (state, payload) {
      state.myReservations = payload
    },
    changeMyGroups (state, payload) {
      state.myGroups = payload
    },
    checkRooms (state, payload) {
      state.allowedRooms = payload
    },
    setLoginUser (state, payload) {
      state.loginUser = payload
    },
    setAllUsers (state, users) {
      state.allUsers = users
    }
  },
  getters: {
    getRoomIDs: (state) => {
      let rooms = []
      state.allowedRooms.forEach(element => {
        rooms.push(element.id)
      })
      return rooms
    },
    getGroupIDs: (state) => {
      let groups = []
      state.myGroups.forEach(element => {
        groups.push(element.id)
      })
      return groups
    },
    gettraQIDs: (state) => {
      let users = []
      state.allUsers.forEach(element => {
        users.push(element.traq_id)
      })
      return users
    }
  },
  actions: {
    getUserMe: async function ({ commit }) {
      try {
        const response = await UsersRepository.getMe()
        console.log(response)
        await commit('setLoginUser', response.data)
      } catch (error) {
        console.error(error)
      }
    },
    getMyGroups: async function ({ commit }) {
      const traQID = this.state.loginUser.traq_id
      try {
        const response = await GroupsRepository.get(traQID)
        console.log(response)
        commit('changeMyGroups', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getMyReservations ({ commit }) {
      const payload = { traQID: this.state.loginUser.traq_id }
      try {
        let response = await ReservationsRepository.get(payload)
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
          let date
          date = new Date(response.data[i].date)
          response.data[i].date = date
        }
        commit('changeMyReservations', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getRooms ({ commit }, payload) {
      try {
        const response = await RoomsRepository.get(payload)
        console.log(response)
        commit('checkRooms', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getUsers ({ commit }) {
      try {
        const response = await UsersRepository.get()
        console.log(response)
        await commit('setAllUsers', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
