
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
