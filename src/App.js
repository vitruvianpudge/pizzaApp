import {
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import Header from './components/Header'
import Home from './pages/Home'
import Card from "./pages/Card";
import NotFound from './pages/NotFound';
import './scss/app.scss'



function App() {

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card" element={<Card />} />
              <Route path="*" element={<NotFound />} />

              {/* <Home /> */}
              {/* <NotFound /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
