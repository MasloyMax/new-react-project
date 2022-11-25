import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Contents from "./components/Contents/Contents";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <Contents/>
        </div>
    );
}

export default App;
