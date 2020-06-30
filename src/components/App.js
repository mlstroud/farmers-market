import React from "react";
import Header from "./Header";
import PageControl from "./PageControl";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <PageControl />
      </div>
    </React.Fragment>
  );
}

export default App;
