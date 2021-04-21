
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
