export default ({ store }) => {
    if (store.getters.isCartOpen) {
        store.dispatch('toggleIsCartOpen', false)
    }
    if (store.getters.isSideNavOpen) {
        store.dispatch('toggleIsSideNavOpen', false)
    }
    if (store.getters.isSearchOpen) {
        store.dispatch('toggleIsSearchOpen', false)
    }
}