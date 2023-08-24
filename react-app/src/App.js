import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';

import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

import NavBar from './components/NavBar/NavBar';
import NavBarChinese from './components/NavBar-Chinese/NavBarChinese';

import HomePage from "./components/HomPage/homepage";
import HomepageChinese from './components/HomePage-Chinese/homepageChinese';
import AttorneyPage from './components/AttorneyPage/attorneyPage';
import PracticePage from './components/PracticePage/practicePage';
import ResourcesPage from './components/ResourcesPage/resourcesPage';
import ContactPage from './components/ContactPage/contactPage';

function App() {

  const [isTransBttn, setTransBttn] = useState(true)

  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {isTransBttn ? <NavBar transBttn={isTransBttn} setTransBttn={setTransBttn}/> : <NavBarChinese transBttn={isTransBttn} setTransBttn={setTransBttn}/>}
      <Switch>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
         <Route path='/contact' exact={true} >
          <ContactPage/>
        </Route>
         <Route path='/resources' exact={true} >
          <ResourcesPage/>
        </Route>
        <Route path='/practice' exact={true} >
          <PracticePage/>
        </Route>
        <Route path='/attorney' exact={true} >
          <AttorneyPage/>
        </Route>
        <Route path='/' exact={true} >
          {isTransBttn ? <HomePage/> : <HomepageChinese/>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
