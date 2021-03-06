# Twitch Practice Application With React From Stephen Course

# Steps Of App

### (1) Install React Router Dom In Project Files

    yarn add react-router-dom

### (2) Basic Use Of React Router

#### App.js
```js
    import {BrowserRouter , Route} from 'react-router-dom'

    const pageone = () => {
        return <div>Page One</div>
    }

    const pagetwo = () => {
        return <div>Page Two</div>
    }

    function App() {
        return (
            <div className="App">
            <BrowserRouter>
                <Route path="/" exact component={pageone} />
                <Route path="/pagetwo" component={pagetwo} />
            </BrowserRouter>      
            </div>
        );
    }

    export default App;
```

### (3) Create Required Components

    (1) StreamList
    (2) StreamCreate
    (3) StreamEdit
    (4) StreamDelete
    (5) StreamShow


### (4) Setup Basic Components With React Router

#### App.js
```js
    import {BrowserRouter , Route} from 'react-router-dom'
    import StreamCreate from './components/StreamCreate'
    import StreamEdit from './components/StreamEdit'
    import StreamDelete from './components/StreamDelete'
    import StreamList from './components/StreamList'
    import StreamShow from './components/StreamShow'

    function App() {
    return (
        <div className="App">
        <BrowserRouter>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/delete" component={StreamDelete} />
            <Route path="/streams/show" component={StreamShow} />
        </BrowserRouter>      
        </div>
    );
    }

    export default App;
```

### (5) Create Header Component And Import Inside App.js

#### Header.js
```js
    import React from 'react'
    import {Link} from 'react-router-dom'

    function Header() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Twitch.com</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" >Streamer</Link>
                    </li>
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to="/"> All Streams </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }

    export default Header
```

#### App.js
```js
    import {BrowserRouter , Route} from 'react-router-dom'
    import StreamCreate from './components/StreamCreate'
    import StreamEdit from './components/StreamEdit'
    import StreamDelete from './components/StreamDelete'
    import StreamList from './components/StreamList'
    import StreamShow from './components/StreamShow'
    import Header from './components/Header'

    function App() {
    return (
        <div className="App">
        <BrowserRouter>
            <Header/>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/delete" component={StreamDelete} />
            <Route path="/streams/show" component={StreamShow} />
        </BrowserRouter>      
        </div>
    );
    }

    export default App;
```

### (6) Steps Of Creating Authentication

    (1) Create New Project Called 'streamy' In 'console.developers.google.com'
    
    (2) Setup Auth Confirmation Screen By Select 'credentials' Then 'configure consent screen' And Enter App Name 'streamy'
    
    (3) Then Create Credentials Then Select 'OAuth Client ID' Then Select 'Web Application' And Enter App Name 'Web Client 1' Then Enter Authorized Javascript Origins 'http://localhost:3000' Then Click Create Button Then It Will Give You The Client Id '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com'

### (6) Include Google Script Tag Inside 'index.html' And Can Test It By Write 'gapi' In Browser Console

#### App.js

```html
    <script src="https://apis.google.com/js/api.js"></script>
```

### (7) Create 'GoogleAuth.js' Component Inside 'Components' Folder And Import It Inside 'Header.js'

#### Components/GoogleAuth.js

```js
    import React , {useEffect} from 'react'

    function GoogleAuth() {

        useEffect(() => {
            console.log('Hellow');
            window.gapi.load('client:auth2' , () => {
                window.gapi.client.init({
                    clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                    scope: 'email'
                })
            });
        } , [])
        return (
            <div>
                GoogleAuth
            </div>
        )
    }

    export default GoogleAuth
```

#### Components/Header.js

```js
    import React from 'react'
    import {Link} from 'react-router-dom'
    import GoogleAuth from './GoogleAuth'

    function Header() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Twitch.com</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" >Streamer</Link>
                    </li>
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to="/"> All Streams </Link>
                    </li>
                    <GoogleAuth/>
                    </ul>
                </div>
            </nav>
        )
    }

    export default Header
```

### (8) Rendering Authentication Status

#### Components/GoogleAuth.js

```js
    import React , {useState , useEffect} from 'react'

    function GoogleAuth() {

        const[isSignedIn , setIsSignedIn] = useState(null);

        useEffect(() => {
            console.log('Hellow');
            window.gapi.load('client:auth2' , () => {
                window.gapi.client.init({
                    clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    // Create Then For Get Auth Status
                    const auth = window.gapi.auth2.getAuthInstance();
                    setIsSignedIn(auth.isSignedIn.get());
                })
            });
        } , [])

        // Function For Rendering Auth Status
        const renderAuthBtn = () => {
            if(isSignedIn === null){
                return <div>We Don't Know If You Signed In</div>
            } 

            else if(isSignedIn){
                return <div>Congs You Signed In Now</div>
            }

            else{
                return <div>Sorry You Don't Signed In</div>
            }
        }
        return (
            <div>
                GoogleAuth
                {renderAuthBtn()}
            </div>
        )
    }

    export default GoogleAuth
```

### (9) Updating Auth Status

#### Components/GoogleAuth.js

```js

    import React , {useState , useEffect} from 'react'

    function GoogleAuth() {

        const[isSignedIn , setIsSignedIn] = useState(null);

        useEffect(() => {

            window.gapi.load('client:auth2' , () => {
                window.gapi.client.init({
                    clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    // Create Then For Get Auth Status
                    const auth = window.gapi.auth2.getAuthInstance();
                    setIsSignedIn(auth.isSignedIn.get());

                    // Updating Auth State
                    // Use gapi.auth2.getAuthInstance().signOut()
                    // And gapi.auth2.getAuthInstance().signIn() For Check
                    auth.isSignedIn.listen(() => {
                        setIsSignedIn(auth.isSignedIn.get());
                    })
                })
            });
        } , [])
    

        // Function For Rendering Auth Status
        const renderAuthBtn = () => {
            if(isSignedIn === null){
                return <div>We Don't Know If You Signed In</div>
            } 

            else if(isSignedIn){
                return <div>Congs You Signed In Now</div>
            }

            else{
                return <div>Sorry You Don't Signed In</div>
            }
        }
        return (
            <div>
                GoogleAuth
                {renderAuthBtn()}
            </div>
        )
    }

    export default GoogleAuth

```

### (10) Displaying SignIn And SignOut Buttons

#### Components/GoogleAuth.js

```js
    import React , {useState , useEffect} from 'react'

    function GoogleAuth() {

        const[isSignedIn , setIsSignedIn] = useState(null);

        useEffect(() => {

            window.gapi.load('client:auth2' , () => {
                window.gapi.client.init({
                    clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    // Create Then For Get Auth Status
                    const auth = window.gapi.auth2.getAuthInstance();
                    setIsSignedIn(auth.isSignedIn.get());

                    // Updating Auth State
                    // Use gapi.auth2.getAuthInstance().signOut()
                    // And gapi.auth2.getAuthInstance().signIn() For Check
                    auth.isSignedIn.listen(() => {
                        setIsSignedIn(auth.isSignedIn.get());
                    })
                })
            });
        } , [])
    

        // Function For Rendering Auth Status
        // Displaying SignIn And SignOut Buttons
        const renderAuthBtn = () => {
            if(isSignedIn === null){
                return null;
            } 

            else if(isSignedIn){
                return (
                    <button className="btn btn-danger">
                        SignOut
                    </button>
                )
            }

            else{
                return (
                    <button className="btn btn-success">
                        SignIn With Google
                    </button>
                )
            }
        }
        return (
            <div>
                {renderAuthBtn()}
            </div>
        )
    }

    export default GoogleAuth

```

### (11) Create SignIn And SignOut Methods

#### Components/GoogleAuth.js

```js
    import React , {useState , useEffect} from 'react'

    function GoogleAuth() {

        const[isSignedIn , setIsSignedIn] = useState(null);

        useEffect(() => {

            window.gapi.load('client:auth2' , () => {
                window.gapi.client.init({
                    clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    // Create Then For Get Auth Status
                    const auth = window.gapi.auth2.getAuthInstance();
                    setIsSignedIn(auth.isSignedIn.get());

                    // Updating Auth State
                    // Use gapi.auth2.getAuthInstance().signOut()
                    // And gapi.auth2.getAuthInstance().signIn() For Check
                    auth.isSignedIn.listen(() => {
                        setIsSignedIn(auth.isSignedIn.get());
                    })
                })
            });
        } , [])
        
        const onSignIn = () => {
            window.gapi.auth2.getAuthInstance().signIn();
        }

        const onSignOut = () => {
            window.gapi.auth2.getAuthInstance().signOut();
        }


        // Function For Rendering Auth Status
        // Displaying SignIn And SignOut Buttons
        const renderAuthBtn = () => {
            if(isSignedIn === null){
                return null;
            } 

            else if(isSignedIn){
                return (
                    <button className="btn btn-danger" onClick={() => onSignOut()}>
                        SignOut
                    </button>
                )
            }

            else{
                return (
                    <button className="btn btn-success" onClick={() => onSignIn()}>
                        SignIn With Google
                    </button>
                )
            }
        }
        return (
            <div>
                {renderAuthBtn()}
            </div>
        )
    }

    export default GoogleAuth

```

### (12) Install [redux] And [react-redux]

    npm i --save redux react-redux

### (13) Create Required Redux Files

    (1) actions [index.js]
    (2) reducers [index.js]

### (14) Preparing Redux Use

#### /redux/reducers/index.js

```js
    import {combineReducers} from 'redux'

    export default combineReducers({
        replaceMe : () => "Hellow World"
    })
```

#### /index.js

```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {createStore} from 'redux'
    import {Provider} from 'react-redux'
    import allReducers from './redux/reducers'

    const store = createStore(allReducers);

    ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
```

### (15) Connecting Action Creators With GoogleAuth Component

#### /redux/actions/index.js

```js
    export const signIn = () => {
        return {
            type: "SIGN_IN"
        }
    }

    export const signOut = () => {
        return {
            type: "SIGN_OUT"
        }
    }
```

#### /redux/Components/GoogleAuth.js

```js
    import React , {useState , useEffect} from 'react'
    import { connect } from 'react-redux';
    import {signIn , signOut} from '../redux/actions'

    function GoogleAuth() {

        const[isSignedIn , setIsSignedIn] = useState(null);

        useEffect(() => {

            window.gapi.load('client:auth2' , () => {
                window.gapi.client.init({
                    clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    // Create Then For Get Auth Status
                    const auth = window.gapi.auth2.getAuthInstance();
                    setIsSignedIn(auth.isSignedIn.get());

                    // Updating Auth State
                    // Use gapi.auth2.getAuthInstance().signOut()
                    // And gapi.auth2.getAuthInstance().signIn() For Check
                    auth.isSignedIn.listen(() => {
                        setIsSignedIn(auth.isSignedIn.get());
                    })
                })
            });
        } , [])
        
        const onSignIn = () => {
            window.gapi.auth2.getAuthInstance().signIn();
        }

        const onSignOut = () => {
            window.gapi.auth2.getAuthInstance().signOut();
        }


        // Function For Rendering Auth Status
        // Displaying SignIn And SignOut Buttons
        const renderAuthBtn = () => {
            if(isSignedIn === null){
                return null;
            } 

            else if(isSignedIn){
                return (
                    <button className="btn btn-danger" onClick={() => onSignOut()}>
                        SignOut
                    </button>
                )
            }

            else{
                return (
                    <button className="btn btn-success" onClick={() => onSignIn()}>
                        SignIn With Google
                    </button>
                )
            }
        }
        return (
            <div>
                {renderAuthBtn()}
            </div>
        )
    }

    export default connect(null , {signIn , signOut})(GoogleAuth)

```

### (16) Building [authReducer] And Import It Inside [index.js] That In [reducers] Folder

#### /redux/reducers/authReducers.js

```js
    const initialState = {
        isSignedIn : null
    }

    export default (state = initialState , action) => {
        switch(action.type){
            case "SIGN_IN":
                return {...state , isSignedIn : true}

            case "SIGN_OUT":
                return {...state , isSignedIn : false}    

            default: return state
        }
    }
```

#### /redux/reducers/index.js

```js
    import {combineReducers} from 'redux'
    import authReducer from './authReducer'

    export default combineReducers({
        auth : authReducer
    })
```