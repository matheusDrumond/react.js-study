import { db } from '../firebase/config';

// Authentication functions from firebase
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

// Hooks
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // clean up
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkIfIsCancelled = () => {
        if(cancelled){
            return;
        }
    }

    const auth = getAuth();

    const createUser = async (data) => {
        checkIfIsCancelled();
        setLoading(true);

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            )

            await updateProfile(user, {displayName: data.name})

            return user 
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
        }

        setLoading(false);
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return { error, createUser, auth, loading}

}

