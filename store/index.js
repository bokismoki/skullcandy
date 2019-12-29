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
    isInCart: state => payload => {
        return state.cartItems.find(item => item._id = payload)
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
        if (payload.change === 1) {
            state.cartItems.find(item => item._id === payload._id).quantity++
        } else {
            state.cartItems.find(item => item._id === payload._id).quantity--
        }
    },
    TOGGLE_IS_CART_OPEN: (state, payload) => {
        if (payload === 1) {
            state.isCartOpen = true
        } else {
            state.isCartOpen = false
        }
    }
}

export const actions = {
    addItem: ({ state, commit, dispatch }, payload) => {
        // Server code
        if (Array(state.cartItems.find(item => item._id === payload._id))[0] === undefined) {
            commit('ADD_ITEM', payload)
        } else {
            dispatch('updateQuantity', { _id: payload._id, change: 1 })
        }
    },
    removeItem: ({ commit }, payload) => {
        // Server code
        commit('REMOVE_ITEM', payload)
    },
    updateQuantity: ({ state, commit, dispatch }, payload) => {
        // Server code
        if (payload.change === 0) {
            if (state.cartItems.find(item => item._id === payload._id).quantity === 1) {
                dispatch('removeItem', payload.index)
            } else {
                commit('UPDATE_QUANTITY', payload)
            }
        } else {
            commit('UPDATE_QUANTITY', payload)
        }
    },
    toggleIsCartOpen: ({ commit }, payload) => {
        commit('TOGGLE_IS_CART_OPEN', payload)
    }
}