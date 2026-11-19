import { useState, createContext, useEffect } from 'react'
export const UserContext = createContext()
import { API_URL } from '../constants/api'


export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authChecked, setAuthchecked] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
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
            if (!response.ok) {
                throw new Error(data.error || data.message || 'Login failed');
            }
            setUser(data.user);
            setAccessToken(data.token.access_token);
        } catch (error) {
            throw error
        }
    }
    async function logout() {
        try {
            const response = await fetch(`${API_URL}/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            const data = await response.json();
            console.log('Logout response:', data);
            if (!response.ok) {
                throw new Error(data.error || data.message || 'logout failed');
            }
            setUser(null)
        } catch (error) {
            throw error
        }
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
            throw Error(error.message)
        }

    }
    async function getInitializeUser() {
        try {
            const res = await fetch(`${API_URL}/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setUser(data.user);
        } catch (error) {
            setUser(null);
            throw Error(error.message)
        } finally {
            setAuthchecked(true)
        }
    }
    useEffect(() => {
        getInitializeUser();
    }, []);


    return (
        <UserContext.Provider value={{ user, login, logout, register, authChecked }}>
            {children}
        </UserContext.Provider>
    )
}