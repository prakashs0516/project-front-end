import { useState } from "react";


function SignUpPage({ setPageTab, setUserId }) {
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit() {
        if (password === confirmPassword) {
            // allow only if password and confirmPassword is same.
            // then perform back-end operation and get userId.
            // 🔖 API CONNECTION CODE
            // ---------------------------------------------------------------------
            // 🏷️ START 
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "username": username,
                "password": password
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("http://localhost:3434/user/sign-up", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        setUserId(result.data._id);
                        setPageTab("todo");
                    } else {
                        alert(result.msg);
                    }
                })
                .catch((error) => console.error(error));
            // ---------------------------------------------------------------------
            // 🏷️ END 
        }
    }
    return (
        <div>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <br />
            <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />
            <br />
            <button onClick={handleSubmit}>submit</button>
            <br />
            <button onClick={() => setPageTab('sign-in')}>go to sign-in page</button>
        </div>
    );
}
export default SignUpPage;