import {
    GoogleAuthProvider,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithPopup,
  } from 'firebase/auth';
  import{ db } from "../firebase/config";
  
  import { useState, useEffect } from "react"
  
  export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);
    const auth=getAuth()
    const provider=new GoogleAuthProvider

    function checkIfIsCancelled() {
      if (cancelled) {
        return
      }
    }

        const loginWithGoogle=async()=>{
      try{
        const result=await signInWithPopup(auth, provider);
        return result.user;
      } catch (error){
        console.error("Erro ao fazer login com Google.", error.message);
        return null;
      }
    };

    const createUser = async (data) => {
      checkIfIsCancelled();

      setLoading(true);

      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        await updateProfile(user, {
          displayName: data.displayName,
        });

        return user;
      } catch (error) {
        console.log(error.message);
        console.log(typeof error.message);

        let systemErrorMessage;

        if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
        } else if (error.message.includes("email-already")) {
          systemErrorMessage = "E-mail já cadastrado.";
        } else {
          systemErrorMessage = "Ocorreu um erro, por fovor tente mais tarde.";
        }

        setError(systemErrorMessage);
      }

      setLoading(false);
    };

    const logout = () => {
      checkIfIsCancelled();

      signOut(auth);
    };

    const login = async (data) => {
      checkIfIsCancelled();

      setLoading(true);
      setError(false);

      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      } catch (error) {
        console.log(error.message);
        console.log(typeof error.message);
        console.log(error.message.includes("user-not"));

        let systemErrorMessage;

        if (error.message.includes("user-not-found")) {
          systemErrorMessage = "Usuário não encontrado.";
        } else if (error.message.includes("wrong-password")) {
          systemErrorMessage = "Senha incorreta.";
        } else {
          systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        }

        console.log(systemErrorMessage);

        setError(systemErrorMessage);
      }

      console.log(error);

      setLoading(false);
    };

    useEffect(() => {
      return () => setCancelled(true);
    }, []);

    return {
      auth,
      createUser,
      error,
      logout,
      login,
      loading,
      loginWithGoogle,
    };
  };