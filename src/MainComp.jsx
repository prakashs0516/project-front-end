import { useState } from "react";
import SigninPage from "./SignInPage"
import SignUpPage from "./SignUpPage";
import ToDoList from "./ToDoList";
import WelcomePage from "./WelcomePage";


function MainComp() {
    const [pageTab, setPageTab] = useState(" ");
    const [userId, setUserId] = useState(" ");

    switch (pageTab) {
        case "Sign-In":
            return <SigninPage setPageTab={setPageTab} setUserId={setUserId} />;
        case "Sign-Up":
            return <SignUpPage setPageTab={setPageTab} setUserId={setUserId} />;
        case "ToDo":
            return <ToDoList setPageTab={setPageTab} userId={userId} />;
        default:
            return <WelcomePage setPageTab={setPageTab} />;
    }
}
export default MainComp;