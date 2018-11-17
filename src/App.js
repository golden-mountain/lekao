import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hanz from "./Hanz";
import English from "./English";

export default function App() {
  return (
    <Router>
      <div>
        <h2>乐考.听写</h2>
        <ul>
          <li>
            <Link to="/english">English</Link>
          </li>
          <li>
            <Link to="/hanz">语文</Link>
          </li>
        </ul>

        <Route path="/english" component={English} />
        <Route path="/hanz" component={Hanz} />
      </div>
    </Router>
  );
}
