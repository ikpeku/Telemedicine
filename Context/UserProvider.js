import { createContext, useReducer, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import { useRouter } from "expo-router";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


export const userProvider = createContext({ user: undefined })



// const ReducerFxn = (state, action) => {
//     switch (action.type) {
//         case 'signIn':
//         case 'signUp':
//             return { user: action.payload }
//         case 'signOut':
//             return { user: null }

//         default:
//             return state
//     }

// }

// const initialState = {
//     user: undefined,
//     isLoading: false

// }





export const UserContext = ({ children }) => {
    const router = useRouter()
    const { getItem, setItem } = useAsyncStorage('@isNewUser');

    // const [state, dispatch] = useReducer(ReducerFxn, initialState)
    const [user, setUser] = useState(undefined)
    // const { user } = state


    useEffect(() => {

        const checkUser = async () => {
            await setItem("true");
            try {
                const response = await Auth.currentAuthenticatedUser({ bypassCache: true })
                setUser(response)

                // dispatch({ type: "signIn", payload: response })
            } catch (error) {
                setUser(null)
                // dispatch({ type: "signOut" })
            }

        }

        checkUser()

        const listener = async (data) => {

            switch (data?.payload?.event) {
                case 'signIn':
                case 'signUp':
                case 'signOut':
                    return checkUser()
            }
        };





        return Hub.listen('auth', listener);

    }, [user])


    // console.log(user)
    return (
        <userProvider.Provider value={{ user }}>{children}</userProvider.Provider>
    )
}

