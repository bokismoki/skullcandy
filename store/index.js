import { outputNotification } from '~/Utils'

export const state = () => ({
    products: [
        {
            "_id": 1,
            "name": "Crusher ANC Personalized Noise Canceling Wireless Headphones",
            "price": 319.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-1.jpg'),
            "small-images": [
                require('~/assets/img/products/small-1-1.jpg'),
                require('~/assets/img/products/small-1-2.jpg')
            ]
        },
        {
            "_id": 2,
            "name": "Venue Noise Canceling Wireless Headphones",
            "price": 179.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-2.jpg'),
            "small-images": [
                require('~/assets/img/products/small-2-1.jpg'),
                require('~/assets/img/products/small-2-2.jpg'),
                require('~/assets/img/products/small-2-3.jpg')
            ]
        },
        {
            "_id": 28,
            "name": "Method BT Sport Earbuds",
            "price": 59.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-3.jpg'),
            "small-images": [
                require('~/assets/img/products/small-3-1.jpg'),
                require('~/assets/img/products/small-3-2.jpg'),
                require('~/assets/img/products/small-3-3.jpg'),
                require('~/assets/img/products/small-3-4.jpg')
            ]
        },
        {
            "_id": 4,
            "name": "Hesh 3 Wireless Over-Ear Headphone",
            "price": 99.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-4.jpg'),
            "small-images": [
                require('~/assets/img/products/small-4-1.jpg'),
                require('~/assets/img/products/small-4-2.jpg'),
                require('~/assets/img/products/small-4-3.jpg'),
                require('~/assets/img/products/small-4-4.jpg'),
                require('~/assets/img/products/small-4-5.jpg')
            ]
        },
        {
            "_id": 5,
            "name": "Icon Wireless On-Ear Headphone",
            "price": 49.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-5.jpg'),
            "small-images": [
                require('~/assets/img/products/small-5-1.jpg'),
                require('~/assets/img/products/small-5-2.jpg')
            ]
        },
        {
            "_id": 7,
            "name": "Rift On-Ear Headphone",
            "price": 19.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-6.jpg'),
            "small-images": [
                require('~/assets/img/products/small-6-1.jpg'),
                require('~/assets/img/products/small-6-2.jpg'),
                require('~/assets/img/products/small-6-3.jpg'),
                require('~/assets/img/products/small-6-4.jpg'),
                require('~/assets/img/products/small-6-5.jpg')
            ]
        },
        {
            "_id": 22,
            "name": "Jib+ Active Wireless Earbuds",
            "price": 29.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-7.jpg'),
            "small-images": [
                require('~/assets/img/products/small-7-1.jpg'),
                require('~/assets/img/products/small-7-2.jpg')
            ]
        },
        {
            "_id": 8,
            "name": "Cassette Wireless On-Ear Headphones",
            "price": 29.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-8.jpg'),
            "small-images": [
                require('~/assets/img/products/small-8-1.jpg'),
                require('~/assets/img/products/small-8-2.jpg'),
                require('~/assets/img/products/small-8-3.jpg')
            ]
        },
        {
            "_id": 24,
            "name": "Ink'd+ Earbuds with Michrophone",
            "price": 9.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-9.jpg'),
            "small-images": [
                require('~/assets/img/products/small-9-1.jpg'),
                require('~/assets/img/products/small-9-2.jpg'),
                require('~/assets/img/products/small-9-3.jpg'),
                require('~/assets/img/products/small-9-4.jpg'),
                require('~/assets/img/products/small-9-5.jpg')
            ]
        },
        {
            "_id": 9,
            "name": "Hesh 2 Over-Ear Wireless Headphone",
            "price": 79.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-10.jpg'),
            "small-images": [
                require('~/assets/img/products/small-10-1.jpg'),
                require('~/assets/img/products/small-10-2.jpg'),
                require('~/assets/img/products/small-10-3.jpg')
            ]
        },
        {
            "_id": 10,
            "name": "Uproar Wireless Headphones",
            "price": 49.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-11.jpg'),
            "small-images": [
                require('~/assets/img/products/small-11-1.jpg'),
                require('~/assets/img/products/small-11-2.jpg'),
                require('~/assets/img/products/small-11-3.jpg'),
                require('~/assets/img/products/small-11-4.jpg'),
                require('~/assets/img/products/small-11-5.jpg')
            ]
        },
        {
            "_id": 11,
            "name": "Crusher 360 Ultra-Realistic Audio",
            "price": 2999.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-12.jpg'),
            "small-images": [
                require('~/assets/img/products/small-12-1.jpg')
            ]
        },
        {
            "_id": 30,
            "name": "Barricade Mini Wireless Speaker",
            "price": 39.99,
            "category": "speakers all",
            "main-image": require('~/assets/img/products/main-13.jpg'),
            "small-images": [
                require('~/assets/img/products/small-13-1.jpg')
            ]
        },
        {
            "_id": 13,
            "name": "Indy True Wireless Earbuds",
            "price": 84.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-14.jpg'),
            "small-images": [
                require('~/assets/img/products/small-14-1.jpg'),
                require('~/assets/img/products/small-14-2.jpg'),
                require('~/assets/img/products/small-14-3.jpg'),
                require('~/assets/img/products/small-14-4.jpg'),
                require('~/assets/img/products/small-14-5.jpg')
            ]
        },
        {
            "_id": 14,
            "name": "Sesh True Wireless Earbuds with Pring",
            "price": 59.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-15.jpg'),
            "small-images": [
                require('~/assets/img/products/small-15-1.jpg')
            ]
        },
        {
            "_id": 15,
            "name": "Push True Wireless Earbuds",
            "price": 99.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-16.jpg'),
            "small-images": [
                require('~/assets/img/products/small-16-1.jpg'),
                require('~/assets/img/products/small-16-2.jpg'),
                require('~/assets/img/products/small-16-3.jpg')
            ]
        },
        {
            "_id": 12,
            "name": "Hesh 2 Over-Ear Headphones",
            "price": 59.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-17.jpg'),
            "small-images": [
                require('~/assets/img/products/small-17-1.jpg')
            ]
        },
        {
            "_id": 16,
            "name": "Sesh True Wireless Earbuds",
            "price": 59.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-18.jpg'),
            "small-images": [
                require('~/assets/img/products/small-18-1.jpg'),
                require('~/assets/img/products/small-18-2.jpg'),
                require('~/assets/img/products/small-18-3.jpg')
            ]
        },
        {
            "_id": 17,
            "name": "Method ANC",
            "price": 79.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-19.jpg'),
            "small-images": [
                require('~/assets/img/products/small-19-1.jpg'),
                require('~/assets/img/products/small-19-2.jpg')
            ]
        },
        {
            "_id": 18,
            "name": "Vert Clip-Anywhere Wireless Earbuds",
            "price": 84.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-20.jpg'),
            "small-images": [
                require('~/assets/img/products/small-20-1.jpg')
            ]
        },
        {
            "_id": 3,
            "name": "Crusher Wireless Immersive Bass Headphone",
            "price": 149.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-21.jpg'),
            "small-images": [
                require('~/assets/img/products/small-21-1.jpg'),
                require('~/assets/img/products/small-21-2.jpg'),
                require('~/assets/img/products/small-21-3.jpg'),
                require('~/assets/img/products/small-21-4.jpg')
            ]
        },
        {
            "_id": 19,
            "name": "Method Active Wireless Sport Earbuds",
            "price": 59.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-22.jpg'),
            "small-images": [
                require('~/assets/img/products/small-22-1.jpg'),
                require('~/assets/img/products/small-22-2.jpg')
            ]
        },
        {
            "_id": 20,
            "name": "Ink'd Active",
            "price": 59.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-23.jpg'),
            "small-images": [
                require('~/assets/img/products/small-23-1.jpg'),
                require('~/assets/img/products/small-23-1.jpg')
            ]
        },
        {
            "_id": 21,
            "name": "Ink'd Wireless Earbuds",
            "price": 39.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-24.jpg'),
            "small-images": [
                require('~/assets/img/products/small-24-1.jpg'),
                require('~/assets/img/products/small-24-2.jpg'),
                require('~/assets/img/products/small-24-3.jpg'),
                require('~/assets/img/products/small-24-4.jpg')
            ]
        },
        {
            "_id": 23,
            "name": "Jib+ Wireless Earbuds",
            "price": 19.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-25.jpg'),
            "small-images": [
                require('~/assets/img/products/small-25-1.jpg'),
                require('~/assets/img/products/small-25-2.jpg'),
                require('~/assets/img/products/small-25-3.jpg')
            ]
        },
        {
            "_id": 25,
            "name": "Set In-Ear Sport Earbuds",
            "price": 29.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-26.jpg'),
            "small-images": [
                require('~/assets/img/products/small-26-1.jpg'),
                require('~/assets/img/products/small-26-2.jpg'),
                require('~/assets/img/products/small-26-3.jpg'),
                require('~/assets/img/products/small-26-4.jpg')
            ]
        },
        {
            "_id": 26,
            "name": "Jib Earbuds with Microphone",
            "price": 9.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-27.jpg'),
            "small-images": [
                require('~/assets/img/products/small-27-1.jpg'),
                require('~/assets/img/products/small-27-2.jpg'),
                require('~/assets/img/products/small-27-3.jpg'),
                require('~/assets/img/products/small-27-4.jpg')
            ]
        },
        {
            "_id": 6,
            "name": "Riff Wireless On-Ear Headphone",
            "price": 49.99,
            "category": "headphones all",
            "main-image": require('~/assets/img/products/main-28.jpg'),
            "small-images": [
                require('~/assets/img/products/small-28-1.jpg'),
                require('~/assets/img/products/small-28-2.jpg'),
                require('~/assets/img/products/small-28-3.jpg'),
                require('~/assets/img/products/small-28-4.jpg'),
                require('~/assets/img/products/small-28-5.jpg')
            ]
        },
        {
            "_id": 27,
            "name": "Smokin' Buds 2",
            "price": 29.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-29.jpg'),
            "small-images": [
                require('~/assets/img/products/small-29-1.jpg'),
                require('~/assets/img/products/small-29-2.jpg'),
                require('~/assets/img/products/small-29-3.jpg'),
                require('~/assets/img/products/small-29-4.jpg'),
                require('~/assets/img/products/small-29-5.jpg')
            ]
        },
        {
            "_id": 29,
            "name": "Chops Flex Sport Earbuds",
            "price": 19.99,
            "category": "earbuds all",
            "main-image": require('~/assets/img/products/main-30.jpg'),
            "small-images": [
                require('~/assets/img/products/small-30-1.jpg'),
                require('~/assets/img/products/small-30-2.jpg'),
                require('~/assets/img/products/small-30-3.jpg'),
                require('~/assets/img/products/small-30-4.jpg')
            ]
        },
        {
            "_id": 31,
            "name": "Barricade Wireless Speaker",
            "price": 79.99,
            "category": "speakers all",
            "main-image": require('~/assets/img/products/main-31.jpg'),
            "small-images": [
                require('~/assets/img/products/small-31-1.jpg')
            ]
        }
    ],
    cartItems: [],
    isCartOpen: false,
    isSideNavOpen: false,
    isSearchOpen: false,
    searchItems: []
})

export const getters = {
    products: state => state.products,
    product: state => id => state.products.find(product => product._id === id),
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
    },
    CLEAR_CART: state => {
        state.cartItems = []
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
    },
    clearCart: ({ commit }) => {
        commit('CLEAR_CART')
    }
}