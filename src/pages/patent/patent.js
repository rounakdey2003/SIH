import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import AppSearch from "./components/search";
import AppCheckbox from "./components/checkbox";
import AppGroup from "./components/group";
import AppPagination from "./components/pagination";

function PagePatent() {
    return (
        <div className="App">
            <header id='header'>
                <AppHeader/>
            </header>
            <main>
                <div className="title-holder" style={{marginTop:'100px'}}>
                    <h2><strong style={{color: '#f64b4b', fontSize: '40px', marginTop:'100px', textDecoration:'underline'}}>Patent</strong></h2>
                </div>
                <AppSearch/>
                <AppCheckbox/>
                <AppGroup/>
                <AppPagination/>
            </main>
            <footer id="footer">
                <AppFooter/>
            </footer>
        </div>
    );
}

export default PagePatent;