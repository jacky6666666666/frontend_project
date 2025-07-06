import {createContext} from "react";
import {UserData} from "../data/User/UserData.ts"

export const LoginUserContext = createContext<UserData | null | undefined>(undefined);


