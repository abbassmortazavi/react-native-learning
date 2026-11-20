import  { createContext, useState, useEffect } from 'react';
import { API_URL } from '../constants/api'
import { useUser } from '../hooks/useUser'



export const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {accessToken} = useUser();





    async function lists() {
        try {
            const res = await fetch(`${API_URL}/books`, {
                method: "GET",
                headers: {
                     'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'fetch book is faild!!');
            }
            setBooks(data.books)
            
        } catch (error) {
            throw error
        }
    }

    async function getBook(id) {
        try {
            const res = await fetch(`${API_URL}/books/${id}`, {
                 method: "GET",
                headers: {
                     'Content-Type': 'application/json',
                }
            });
             const data = await res.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'fetch book is faild!!');
            }
            setBook(data.book)

        } catch (error) {
            throw error
        }
        
    }

    async function createBook(bookData) {
        try {
            const res = await fetch(`${API_URL}/books`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(bookData)
            });
            const data = await res.json();
            console.log("response", data);
            if (!res.ok) {
                throw new Error(data.error || data.message || 'create book is faild!!');
            }
            setBooks(prevBooks => [...prevBooks, data.book])
        } catch (error) {
            throw error
        }
    }
    async function deleteBook(id) {
        try {
            const res = await fetch(`${API_URL}/books/${id}`, {
                method: "DELETE",
                 headers: {
                    'Content-Type': 'application/json',
                },

            });
             const data = await res.json();
            if (!response.ok) {
                throw new Error(data.error || data.message || 'delete book is faild!!');
            }

        } catch (error) {
            throw error
        }
        
    }

    return (
        <BookContext.Provider value={{ books, lists, loading, error, getBook, deleteBook, createBook }}>
            {children}
        </BookContext.Provider>
    );
}