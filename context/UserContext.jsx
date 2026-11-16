import {useState, createContext} from 'react'
export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

   async function login(email, password) {
        const dummyUser = { email: email, name: 'John Doe', password: password }
        setUser(dummyUser)
    }
    async function logout() {
        setUser(null)
    }
    async function register(email, password, name) {
        const dummyUser = { email: email, name: name, password: password }
        setUser(dummyUser)
    }
    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    )
}