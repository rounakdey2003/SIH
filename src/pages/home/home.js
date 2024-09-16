import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppServices from './components/services'
import AppAbout from './components/about';
import AppInfo from "./components/info";
import AppContact from "./components/contact";
import AppFooter from './components/footer';


function PageHome() {
    return (
            <div className="App">
                <header id='header'>
                    <AppHeader/>
                </header>
                <main>
                    <AppHero/>
                    <AppServices/>
                    <AppAbout/>
                    <AppInfo/>
                    <AppContact/>
                </main>
                <footer id="footer">
                    <AppFooter/>
                </footer>
            </div>
    );
}

export default PageHome;
