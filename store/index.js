export const state = () => ({
    cartItems: [],
    isCartOpen: false
})

export const getters = {
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
    ADD_ITEM: (state, payload) => {
        state.cartItems.push(payload)
    },
    REMOVE_ITEM: (state, payload) => {
        state.cartItems.splice(payload, 1)
    },
    UPDATE_QUANTITY: (state, payload) => {
        if (payload.change) {
            state.cartItems.find(item => item._id === payload._id).quantity++
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
        if (rootState.auth.loggedIn) {
            await $axios.get(`/cart/get/${$auth.$state.user.user_id}`)
                .then(response => {
                    if (response.data.items) {
                        commit('INIT_CART_ITEMS', response.data.items)
                    }
                }).catch(err => {
                    console.error(err)
                })
        }
    },
    addItem({ state, commit, dispatch }, payload) {
        if (Array(state.cartItems.find(item => item._id === payload._id))[0] === undefined) {
            commit('ADD_ITEM', payload)
        } else {
            dispatch('updateQuantity', { _id: payload._id, change: 1 })
        }

        this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
            item: payload,
            action: 'add'
        }, {
            headers: {
                'content-type': 'application/json'
            }
        }).catch(err => {
            console.error(err)
        })
    },
    removeItem({ state, commit }, payload) {
        commit('REMOVE_ITEM', payload)

        this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
            item: payload,
            action: 'remove'
        }, {
            headers: {
                'content-type': 'application/json'
            }
        }).catch(err => {
            console.error(err)
        })
    },
    updateQuantity({ state, commit, dispatch }, payload) {
        if (payload.change === 0) {
            if (state.cartItems.find(item => item._id === payload._id).quantity === 1) {
                dispatch('removeItem', payload.index)

                this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
                    item: payload.index,
                    action: 'remove'
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                }).catch(err => {
                    console.error(err)
                })
            } else {
                commit('UPDATE_QUANTITY', payload)

                this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
                    item: payload.index,
                    action: '--'
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                }).catch(err => {
                    console.error(err)
                })
            }
        } else {
            commit('UPDATE_QUANTITY', payload)

            this.$axios.post(`/cart/updateQuantity/${state.auth.user.user_id}`, {
                item: payload.index,
                action: '++'
            }, {
                headers: {
                    'content-type': 'application/json'
                }
            }).catch(err => {
                console.error(err)
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