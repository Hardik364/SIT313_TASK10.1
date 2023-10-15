import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signout.css"; // Import your CSS file

function Signout() {
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState("");

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setEmail(user.email);
        } else {
            setEmail(""); // Set email to an empty string if not logged in
        }
    }, [auth]);

    async function handleClick() {
        try {
            const res = await auth.signOut();
            setLogin(true);
            navigate("/");
        } catch (error) {
            console.log("Sign out error: " + error);
        }
    }

    return (
        <div className="signout-container">
            <p className={login ? "not-logged-in-text" : "logged-in-text"}>
                {login ? 'Not logged in' : email ? email : 'Not logged in'}
            </p>
            <div className="button-container">
                <div className="signout-button-container">
                    <button className="signout-button" onClick={handleClick}>Log Out</button>
                </div>
            </div>
        </div>
    );
    
    
}

export default Signout;
