import { outputNotification } from '~/Utils'

export const state = () => ({
    products: [],
    cartItems: [],
    isCartOpen: false,
    isSideNavOpen: false,
    isSearchOpen: false,
    searchItems: []
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
    isCartOpen: state => state.isCartOpen,
    isSideNavOpen: state => state.isSideNavOpen,
    isSearchOpen: state => state.isSearchOpen,
    searchItems: state => state.searchItems
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
        if (payload.change) {
            state.cartItems.find(item => item._id === payload._id).quantity += payload.quantity
        } else {
            state.cartItems.find(item => item._id === payload._id).quantity--
        }
    },
    TOGGLE_IS_CART_OPEN: (state, payload) => {
        state.isCartOpen = payload
    },
    TOGGLE_IS_SIDE_NAV_OPEN: (state, payload) => {
        state.isSideNavOpen = payload
    },
    TOGGLE_IS_SEARCH_OPEN: (state, payload) => {
        state.isSearchOpen = payload
    },
    INIT_CART_ITEMS: (state, payload) => {
        state.cartItems = payload
    },
    FILTER_SEARCH_ITEMS: (state, payload) => {
        state.searchItems = payload
    }
}

export const actions = {
    async nuxtServerInit({ rootState, commit }, { $auth, $axios }) {
        await $axios.get('/products/get')
            .then(response => {
                commit('SET_PRODUCTS', response.data)
            }).catch(err => {
                console.error(err)
                outputNotification('Couldn\'t fetch products')
            })
        if (rootState.auth.loggedIn) {
            await $axios.get(`/cart/get/${$auth.$state.user.user_id}`)
                .then(response => {
                    if (response.data.items) {
                        commit('INIT_CART_ITEMS', response.data.items)
                    }
                }).catch(err => {
                    console.error(err)
                    outputNotification('Couldn\'t fetch cartItems from the database')
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
                const { msg, err, authorizationError } = response.data
                if (msg) {
                    outputNotification(null, msg)
                } else {
                    outputNotification(err)
                    if (authorizationError) {
                        this.$auth.logout().then(() => {
                            dispatch('toggleIsCartOpen', false)
                            dispatch('toggleIsSideNavOpen', false)
                        })
                    }
                }
            }).catch(err => {
                console.error(err)
                outputNotification('Couldn\'t add the item to the database')
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
            const { msg, err, authorizationError } = response.data
            if (msg) {
                outputNotification(null, msg)
            } else {
                outputNotification(err)
                if (authorizationError) {
                    this.$auth.logout().then(() => {
                        dispatch('toggleIsCartOpen', false)
                        dispatch('toggleIsSideNavOpen', false)
                    })
                }
            }
        }).catch(err => {
            console.error(err)
            outputNotification('Couldn\'t remove the item from the database')
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
                    const { msg, err, authorizationError } = response.data
                    if (msg) {
                        outputNotification(null, msg)
                    } else {
                        outputNotification(err)
                        if (authorizationError) {
                            this.$auth.logout().then(() => {
                                dispatch('toggleIsCartOpen', false)
                                dispatch('toggleIsSideNavOpen', false)
                            })
                        }
                    }
                }).catch(err => {
                    console.error(err)
                    outputNotification('Couldn\'t update the item in the database')
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
                const { msg, err, authorizationError } = response.data
                if (msg) {
                    outputNotification(null, msg)
                } else {
                    outputNotification(err)
                    if (authorizationError) {
                        this.$auth.logout().then(() => {
                            dispatch('toggleIsCartOpen', false)
                            dispatch('toggleIsSideNavOpen', false)
                        })
                    }
                }
            }).catch(err => {
                console.error(err)
                outputNotification('Couldn\'t update the item in the database')
            })
        }
    },
    toggleIsCartOpen: ({ commit }, payload) => {
        commit('TOGGLE_IS_CART_OPEN', payload)
    },
    toggleIsSideNavOpen: ({ commit }, payload) => {
        commit('TOGGLE_IS_SIDE_NAV_OPEN', payload)
    },
    toggleIsSearchOpen: ({ commit }, payload) => {
        commit('TOGGLE_IS_SEARCH_OPEN', payload)
    },
    initCartItems: ({ commit }, payload) => {
        commit('INIT_CART_ITEMS', payload)
    },
    filterSearchItems: ({ commit, state }, payload) => {
        const filteredItems = state.products.filter(product => product.name.toLowerCase().includes(payload)).splice(0, 5)
        commit('FILTER_SEARCH_ITEMS', filteredItems)
    }
}