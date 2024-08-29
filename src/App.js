import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppSearch from './components/search';
import AppHero from './components/hero';
import AppServices from './components/services'
import AppAbout from './components/about';
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
                    height: '130px',
                    width: '100px',
                }}/>
                <AppHero/>
                <AppServices/>
                <AppAbout/>
            </main>
            <footer id="footer">
                <AppFooter/>
            </footer>
        </div>
    );
}

export default App;
