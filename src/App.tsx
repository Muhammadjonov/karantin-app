import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map(route => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
