import React,{useState,createContext, ReactNode} from "react";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>
}

type UserProps ={
    id: string;
    name: string;
    telefone: string;
    token: string
}

type AuthProviderProps = {
   children:ReactNode 
}

type SignInProps = {
    // email: string;
    telefone: string;
    password: string;
}

import { api } from "../services/api";

export const AuthContext = createContext({}as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const[user,seUser] = useState<UserProps>({
        id: '',
        name: '',
        telefone: '',
        token: ''
    })

    const[loadingAuth,setLoadingAuth] = useState(false)

    const isAuthenticated = !!user.name;

    async function signIn({telefone,password}:SignInProps){
        setLoadingAuth(true);

        try{
            const response = await api.post('/session',{
                telefone,
                password
            })

            console.log(response.data);
        }catch(err){
            console.log('Erro ao acessar', err)
            setLoadingAuth(false)    

        }
    }
    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}