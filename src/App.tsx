import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Contents/Profile/Profile";
import Dialogs from "./components/Contents/Dialogs/Dialogs";
import Music from "./components/Contents/Music/Music";
import Settings from "./components/Contents/Settings/Settings";
import News from "./components/Contents/News/News";



function App(props:any) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className="wrapper_content">
                    <Routes>
                        <Route path="/profile" element={<Profile state={props.state.ProfilePage}/>}/>
                        <Route path="/dialog" element={<Dialogs/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
