import { createContext, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


export const userProvider = createContext({ user: undefined })


export const UserContext = ({ children }) => {

    const { setItem } = useAsyncStorage('@isNewUser');

    const [user, setUser] = useState(undefined)


    useEffect(() => {

        const checkUser = async () => {

            try {
                const response = await Auth.currentAuthenticatedUser({ bypassCache: true })
                setUser(response)

            } catch (error) {
                setUser(null)
            }

        }

        checkUser()

        const listener = async (data) => {

            switch (data?.payload?.event) {
                case 'signIn':
                case 'signUp':
                case 'signOut':
                    await setItem("true");
                    return checkUser()
            }
        };





        return Hub.listen('auth', listener);

    }, [user])


    return (
        <userProvider.Provider value={{ user }}>{children}</userProvider.Provider>
    )
}

