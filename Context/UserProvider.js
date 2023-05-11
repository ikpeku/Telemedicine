import { createContext, useReducer, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import { useRouter } from "expo-router";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


export const userProvider = createContext()



const ReducerFxn = (state, action) => {
    switch (action.type) {
        case 'signIn':
        case 'signUp':
            return { user: action.payload }
        case 'signOut':
            return { user: null }

        default:
            return state
    }

}

const initialState = {
    user: undefined,
    isLoading: false

}





export const UserContext = ({ children }) => {
    const router = useRouter()
    const { getItem, setItem } = useAsyncStorage('@isNewUser');

    const [state, dispatch] = useReducer(ReducerFxn, initialState)
    const { user } = state


    useEffect(() => {

        const checkUser = async () => {
            await setItem("true");
            try {
                const response = await Auth.currentAuthenticatedUser({ bypassCache: true })

                dispatch({ type: "signIn", payload: response })
            } catch (error) {

                dispatch({ type: "signOut" })
            }


        }

        const listener = async (data) => {

            switch (data?.payload?.event) {
                case 'signIn':
                case 'signUp':
                case 'signOut':
                    return checkUser()
            }
        };



        return () => Hub.listen('auth', listener);

    }, [])



    useEffect(() => {
        const getData = async () => {
            const item = await getItem()
            console.log(item)
            if (item && user) {
                // item previously stored

                router.replace("homescreens");
                return
            }

            if (!item && !user) {
                router.replace("onboarding1");
                return
            }

            if (item && user !== null) {
                router.replace("onboarding3");
                return
            }


            // try {
            // } catch(e) {
            //   // error reading value
            // }
        }

        getData()

    }, [user])



    return (
        <userProvider.Provider value={{ ...state }}>{children}</userProvider.Provider>
    )
}






