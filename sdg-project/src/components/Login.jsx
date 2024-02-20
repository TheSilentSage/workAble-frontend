import React from 'react';
import styles from '../styles/login.module.css';
import { handleLogin } from "../utils/Auth";

function Login() {

    const login = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        try {
            const result = handleLogin(email, password);
            console.log("working");
            if (result === true) {
                window.location.href = "/home";

            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-row h-screen overflow-hidden">
            <div className={`${styles.image} bg-cover bg-center w-1/2 h-full`}></div>
            <div className="w-1/2 h-full align-middle flex flex-col justify-center items-center p-20 overflow-hidden">
                <h1 className="text-6xl font-bold mb-4 text-[rgba(0, 9, 22, 1)] font-serif w-full text-center">workAble</h1>
                <p className="text-2xl text-black font-sans font-semibold mb-8 text-center w-full">Get ready to connect to millions <br />of people and grow your network</p>
                <form className="w-full max-w-2xl" onSubmit={(e) => login(e)}>
                    <label htmlFor="email"></label>
                    <input className="border-none rounded-2xl bg-gray-300 shadow-md w-full p-5 mb-8" type="text" name="email" id="email" placeholder="Email" />

                    <label htmlFor="password"></label>
                    <input className="border-none rounded-2xl bg-gray-300 shadow-md w-full p-5 mb-8" type="password" name="password" id="password" placeholder="Password" />

                    <button className="border-none rounded-full bg-blue-600 text-white text-center text-2xl font-bold py-4 w-full max-w-2xl mb-8" type="submit"> Get Verified </button>

                    <p className="text-black font-sans text-xl font-light">Don't have an account? <a href="/">Sign Up</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
