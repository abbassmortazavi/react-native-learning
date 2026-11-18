import { useState, createContext } from 'react'
export const UserContext = createContext()
import { API_URL } from '../constants/api'


export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    async function login(email, password) {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log("login context", data)

            if (!response.ok) {
                throw new Error(data.error || data.message || 'Login failed');
            }
            setUser(data.user);
        } catch (error) {
           throw error
        }
    }
    async function logout() {
        setUser(null)
    }
    async function register(email, password, name) {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, name }),
            });
            const data = await response.json();
            setUser(data.user);
        } catch (error) {
            console.error('Error during registration:', error);
            throw Error(error.message)
        }

    }
    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    )
}