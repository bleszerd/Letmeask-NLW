import {Route, BrowserRouter} from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  )
}
