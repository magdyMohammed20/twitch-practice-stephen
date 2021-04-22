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