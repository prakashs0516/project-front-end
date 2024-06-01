import { useState } from "react";

function SignInPage({ setPageTab, setUserId }) {
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        if (username !== '' && password !== '') {
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

            fetch("http://localhost:3434/user/sign-in", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        setUserId(result.data._id);
                        setPageTab("todo");
                    }
                    else {
                        alert(result.msg);
                    }
                })
                .catch((error) => console.error(error));
            // 🏷️ end
            // ---------------------------------------------------------------------
            // Actually this user id will be coming from back-end

        }
    }

    return (
        <div>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <br />
            <button onClick={handleSubmit}>submit</button>
            <br />
            <button onClick={() => setPageTab('sign-up')}>go to sign-up page</button>
        </div>
    );
}
export default SignInPage;