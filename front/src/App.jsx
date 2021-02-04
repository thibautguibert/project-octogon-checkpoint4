import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from './Thibaut/Home';
import { Rules } from './Thibaut/Rules';
import { Rappers } from './Thibaut/Rappers';
import { TypesTable } from './Thibaut/TypesTable';
import { TheGame } from './Thibaut/TheGame';
import { Admin } from './Admin';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/rappers" component={Rappers} />
        <Route path="/types" component={TypesTable} />
        <Route path="/play" component={TheGame} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </>
  );
}

export default App;
