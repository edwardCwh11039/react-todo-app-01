import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Todo from "./Pages/Todo";
import About from "./Pages/About";
import "./index.css";
import Information from "./Pages/Information";

function AppRouter() {
  const active=()=>{
    
  }

  let routeConfig = [
    { path: "/todo", title: "todo", exact: true, component: Todo },
    { path: "/about", title: "about", exact: false, component: About },
  ];
  return (
    <Router>
      <div className="mainDiv">
        <div className="topNav">
          <ul className="mainNav">
            {routeConfig.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.path} onClick={active} activeClassName="activeLink">{item.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mainContent">
          {routeConfig.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            );
          })}
          <Route path="/todo/:id" exact={false} component={Information} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
