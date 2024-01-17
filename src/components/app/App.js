import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types';

import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import AppHeader from "../appHeader/AppHeader";
import Page404 from "../pages/404";
import SingleComicPage from "../pages/SingleComicPage";

const App = () => {
        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    <main>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                            <Route path="*" element={<Page404/>}></Route>
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