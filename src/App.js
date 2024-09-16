import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';

import PageHome from './pages/home/home'
import PageResearch from "./pages/research/research";
import PagePatent from "./pages/patent/patent";
import PageInnovation from "./pages/innovation/innovation";
import PageStartup from "./pages/startup/startup";
import PageLogin from "./pages/login/login";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/login" element={<PageLogin />} />
                <Route path="/research" element={<PageResearch />} />
                <Route path="/patent" element={<PagePatent />} />
                <Route path="/innovation" element={<PageInnovation />} />
                <Route path="/startup" element={<PageStartup />} />
            </Routes>
        </div>
    );
}
export default App;
