import React from 'react';
import styles from '../styles/login.module.css';

function Register() {

    const register = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        try {
            const result = handleRegister(email, password);
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
                <form className="w-full" onSubmit={(e) => register(e)}>
                    <div className="flex flex-row justify-between gap-4 w-full">
                        <span className="w-full">
                            <label htmlFor="firstname"></label>
                            <input className="border-none rounded-2xl bg-gray-300 shadow-md w-full p-5 mb-8" type="text" name="firstname" id="firstname" placeholder="First Name" />
                        </span>
                        <span className="w-full">
                            <label htmlFor="lastname"></label>
                            <input className="border-none rounded-2xl bg-gray-300 shadow-md w-full p-5 mb-8" type="text" name="lastname" id="lastname" placeholder="Last Name" />
                        </span>
                    </div>

                    <label htmlFor="email"></label>
                    <input className="border-none rounded-2xl bg-gray-300 shadow-md w-full p-5 mb-8" type="text" name="email" id="email" placeholder="Email" />

                    <label htmlFor="password"></label>
                    <input className="border-none rounded-2xl bg-gray-300 shadow-md w-full p-5 mb-8" type="password" name="password" id="password" placeholder="Password" />

                    <button className="border-none rounded-full bg-blue-600 text-white text-center text-2xl font-bold py-4 w-full max-w-2xl mb-8" type="submit"> Get Verified </button>

                    <p className="text-black font-sans text-xl font-light">Already have an account? <a className="text-blue-700" href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Register;
