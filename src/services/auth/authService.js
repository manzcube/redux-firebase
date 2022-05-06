import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";


const register = ({ email, password, name }) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            toast.success(`Successfully signed up ${user}`)
        })
        .catch((error) => {
            toast.error(error.message)
        })
} 

const signin = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            toast.success(`Welcome back ${user}!`)
        })
        .catch((error) => {
            toast.error(error.message)
        })
} 

const signout = () => { 
    signOut(auth)
        .then(() => {
            toast.success('Successfully signed out!')
        })
        .catch((error) => {
            toast.error(error.message)
        })
}

const authService = {
    register,
    signin,
    signout
}

export default authService