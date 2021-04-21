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