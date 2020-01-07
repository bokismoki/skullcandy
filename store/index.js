import Vue from 'vue'

export const state = () => ({
    products: [],
    cartItems: [],
    isCartOpen: false
})

export const getters = {
    products: state => state.products,
    cartItems: state => state.cartItems,
    cartLength: state => state.cartItems.length,
    totalPrice: state => {
        return state.cartItems.reduce((acc, item) => {
            return acc += item.price * item.quantity
        }, 0)
    },
    isCartOpen: state => state.isCartOpen
}

export const mutations = {
    SET_PRODUCTS: (state, payload) => {
        state.products = payload
    },
    ADD_ITEM: (state, payload) => {
        state.cartItems.push(payload)
    },
    REMOVE_ITEM: (state, payload) => {
        state.cartItems.splice(payload, 1)
    },
    UPDATE_QUANTITY: (state, payload) => {
        console.log(payload)
        if (payload.change) {
            state.cartItems.find(item => item._id === payload._id).quantity += payload.quantity
        } else {
            state.cartItems.find(item => item._id === payload._id).quantity--
        }
    },
    TOGGLE_IS_CART_OPEN: (state, payload) => {
        if (payload) {
            state.isCartOpen = true
        } else {
            state.isCartOpen = false
        }
    },
    INIT_CART_ITEMS: (state, payload) => {
        state.cartItems = payload
    }
}

export const actions = {
    async nuxtServerInit({ rootState, commit }, { $auth, $axios }) {
        await $axios.get('/products/get')
            .then(response => {
                commit('SET_PRODUCTS', response.data)
            }).catch(err => {
                console.error(err)
                Vue.notify({
                    group: 'notification',
                    title: 'Error caught:',
                    type: 'error',
                    text: 'Couldn\'t fetch products'
                })
            })
        if (rootState.auth.loggedIn) {
            await $axios.get(`/cart/get/${$auth.$state.user.user_id}`)
                .then(response => {
                    if (response.data.items) {
                        commit('INIT_CART_ITEMS', response.data.items)
                    }
                }).catch(err => {
                    console.error(err)
                    Vue.notify({
                        group: 'notification',
                        title: 'Error caught:',
                        type: 'error',
                        text: 'Couldn\'t fetch cartItems from the database'
                    })
                })
        }
    },
    addItem({ state, commit, dispatch }, payload) {
        if (Array(state.cartItems.find(item => item._id === payload._id))[0] === undefined) {
            commit('ADD_ITEM', payload)

            this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
                action: 'add',
                item: payload,
                user_id: this.$auth.user.user_id,
            }, {
                headers: {
                    'content-type': 'application/json',
                    'authorization': localStorage.getItem('auth._token.local')
                }
            }).then(response => {
                const { msg, err } = response.data
                if (msg) {
                    Vue.notify({
                        group: 'notification',
                        title: 'Cart status:',
                        type: 'success',
                        text: msg
                    })
                } else {
                    Vue.notify({
                        group: 'notification',
                        title: 'Cart status:',
                        type: 'error',
                        text: err
                    })
                }
            }).catch(err => {
                console.error(err)
                Vue.notify({
                    group: 'notification',
                    title: 'Error caught:',
                    type: 'error',
                    text: 'Couldn\'t add the cart item to the database'
                })
            })
        } else {
            const index = state.cartItems.findIndex(item => item._id === payload._id)
            dispatch('updateQuantity', {
                _id: payload._id, change: 1, index, quantity: payload.quantity
            })
        }

    },
    removeItem({ state, commit }, payload) {
        commit('REMOVE_ITEM', payload)

        this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
            action: 'remove',
            item: payload,
            user_id: this.$auth.user.user_id
        }, {
            headers: {
                'content-type': 'application/json',
                'authorization': localStorage.getItem('auth._token.local')
            }
        }).then(response => {
            const { msg, err } = response.data
            if (msg) {
                Vue.notify({
                    group: 'notification',
                    title: 'Cart status:',
                    type: 'success',
                    text: msg
                })
            } else {
                Vue.notify({
                    group: 'notification',
                    title: 'Cart status:',
                    type: 'error',
                    text: err
                })
            }
        }).catch(err => {
            console.error(err)
            Vue.notify({
                group: 'notification',
                title: 'Error caught:',
                type: 'error',
                text: 'Couldn\'t remove the cart item from the database'
            })
        })
    },
    updateQuantity({ state, commit, dispatch }, payload) {
        if (payload.change === 0) {
            if (state.cartItems.find(item => item._id === payload._id).quantity === 1) {
                dispatch('removeItem', payload.index)
            } else {
                commit('UPDATE_QUANTITY', payload)

                this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
                    action: '--',
                    item: payload._id,
                    index: payload.index,
                    user_id: this.$auth.user.user_id
                }, {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': localStorage.getItem('auth._token.local')
                    }
                }).then(response => {
                    const { msg, err } = response.data
                    if (msg) {
                        Vue.notify({
                            group: 'notification',
                            title: 'Cart status:',
                            type: 'success',
                            text: msg
                        })
                    } else {
                        Vue.notify({
                            group: 'notification',
                            title: 'Cart status:',
                            type: 'error',
                            text: err
                        })
                    }
                }).catch(err => {
                    console.error(err)
                    Vue.notify({
                        group: 'notification',
                        title: 'Error caught:',
                        type: 'error',
                        text: 'Couldn\'t update the item in the database'
                    })
                })
            }
        } else {
            commit('UPDATE_QUANTITY', payload)

            this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
                action: '++',
                item: payload._id,
                index: payload.index,
                user_id: this.$auth.user.user_id,
                quantity: payload.quantity
            }, {
                headers: {
                    'content-type': 'application/json',
                    'authorization': localStorage.getItem('auth._token.local')
                }
            }).then(response => {
                const { msg, err } = response.data
                if (msg) {
                    Vue.notify({
                        group: 'notification',
                        title: 'Cart status:',
                        type: 'success',
                        text: msg
                    })
                } else {
                    Vue.notify({
                        group: 'notification',
                        title: 'Cart status:',
                        type: 'error',
                        text: err
                    })
                }
            }).catch(err => {
                console.error(err)
                Vue.notify({
                    group: 'notification',
                    title: 'Error caught:',
                    type: 'error',
                    text: 'Couldn\'t update the item in the database'
                })
            })
        }
    },
    toggleIsCartOpen: ({ commit }, payload) => {
        commit('TOGGLE_IS_CART_OPEN', payload)
    },
    initCartItems: ({ commit }, payload) => {
        commit('INIT_CART_ITEMS', payload)
    }
}