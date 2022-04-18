import React from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
// import Home from './pages/Home';
import routes from "./Routes";


function App() {

  let element = useRoutes(routes)

  return (
    <div className="App">
      <Header />
      {/* <Routes>
        {routes.map(route => {
          if (route.subElement) {
            return (
              <Route
                path={route.path}
                element={<route.element />}
              >
                {
                  Object.entries(route.subElement).map(([path, { Element }]) => {
                    return path === "index" ?
                      (<Route index element={<Element />} />) :
                      (<Route path={path} element={<Element />} />)
                  })
                }
              </Route>
            )
          } else {
            return <Route path={route.path} element={<route.element />} />
          }
        }
        )
        }
      </Routes> */}
      {element}
      <Footer />
    </div >
  );
}

export default App;
