import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import withSuspence from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={withSuspence(DialogsContainer)}/>
                    <Route path='/profile/:userId?' render={withSuspence(ProfileContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        </div>
                        </div>
                        );
                        }
                        }

                        const mapStateToProps = (state) => ({
                        initialized: state.app.initialized
                    })

                        const AppWrapper =  compose(
                        withRouter,
                        connect(mapStateToProps, {initializeApp})
                        )(App);

                        const MainApp = (props) => {
                        return <BrowserRouter>
                        <Provider store={store}>
                        <AppWrapper />
                        </Provider>
                        </BrowserRouter>
                    }

                        export default MainApp;