export function signup(state={},action) {
    switch (action.type) {
        case 'signuprequest':
            return {
                Register: true
            }
        case 'signupsuccess':
            return {

            }

        case 'signupfail':
            return {

            }
            default:
                return state
    }
}
export function login(state={},action) {

    switch (action.type) {

        case 'loginrequest':

            return {

                Register: true

            }

        case 'loginsuccess':

            return {



            }



        case 'loginfail':

            return {



            }

            default:

                return state

    }

}