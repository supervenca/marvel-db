import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types';

import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import AppHeader from "../appHeader/AppHeader";

const App = () => {
        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    <main>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        )
}

App.propTypes = {
    onCharSelected: PropTypes.func
}

export default App;