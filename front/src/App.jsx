import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from './Thibaut/Home';
import { Rules } from './Thibaut/Rules';
import { Rappers } from './Thibaut/Rappers';
import { TypesTable } from './Thibaut/TypesTable';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/rappers" component={Rappers} />
        <Route path="/types" component={TypesTable} />
      </Switch>
    </>
  );
}

export default App;
