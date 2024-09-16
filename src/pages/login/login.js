import AppHeader from "./components/header";
import AppBox from "./components/box";

function PageLogin() {
    return (
        <div className="App">
            <header id='header'>
                <AppHeader/>
            </header>
            <main>
                <AppBox/>
            </main>
        </div>
    );
}

export default PageLogin;