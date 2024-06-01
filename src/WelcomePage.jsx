function WelcomePage({ setPageTab }) {
    return (
        <div>
            <button onClick={() => setPageTab("sign-in")}>sign-in</button>
            <button onClick={() => setPageTab("sign-up")}>sign-up</button>
        </div>
    );
}
export default WelcomePage;