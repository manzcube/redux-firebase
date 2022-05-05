import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";


const register = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            return user
        })
        .catch((error) => {
            toast.error(error.message)
        })
} 

const authService = {
    register,
}

export default authService