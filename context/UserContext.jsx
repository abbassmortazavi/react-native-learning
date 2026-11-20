import { useState, createContext, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
export const UserContext = createContext()
import { API_URL } from '../constants/api'

const TOKEN_KEY = 'access_token'

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authChecked, setAuthchecked] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    async function login(email, password) {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
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
            await SecureStore.setItemAsync(TOKEN_KEY, data.token.access_token);
        } catch (error) {
            throw error
        }
    }
    async function logout() {
        try {
            const response = await fetch(`${API_URL}/auth/logout`, {
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
        } finally {
            setUser(null);
            setAccessToken(null);
            await SecureStore.deleteItemAsync(TOKEN_KEY);
        }
    }
    async function register(email, password, name) {
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
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
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            if (!token) {
                setUser(null);
                return;
            }
            const res = await fetch(`${API_URL}/auth/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!res.ok) {
                await SecureStore.deleteItemAsync(TOKEN_KEY)
                setUser(null)
                setAccessToken(null)
                return
            }
            const data = await res.json();
            setUser(data.user);
            setAccessToken(token);
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
        <UserContext.Provider value={{ user, login, logout, register, authChecked, accessToken }}>
            {children}
        </UserContext.Provider>
    )
}