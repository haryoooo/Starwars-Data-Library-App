import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavbarComponent from './components/NavbarComponent'
import CharPage from './pages/CharPage'
import FilmPage from './pages/FilmPage'
import Homepage from './pages/Homepage'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavbarComponent />

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/Character">
              <CharPage />
            </Route>
            <Route exact path="/Film">
              <FilmPage />
            </Route>
          </Switch>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
