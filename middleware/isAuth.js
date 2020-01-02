export default ({ $auth, redirect }) => {
    if ($auth.$state.loggedIn) {
        redirect({ name: 'index' })
    }
}