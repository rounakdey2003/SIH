import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppSearch from './components/search';
import AppHero from './components/hero';
import AppServices from './components/services'
import AppAbout from './components/about';
import AppInfo from "./components/info";
import AppContact from "./components/contact";
import AppFooter from './components/footer';

function App() {
    return (
        <div className="App">
            <header id='header'>
                <AppHeader/>
                <AppSearch/>
            </header>
            <main>
                <div style={{
                    height: '140px',
                    width: 'auto',
                }}/>
                <AppHero/>
                <div style={{
                    marginTop: '100px'
                }}/>
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

export default App;
