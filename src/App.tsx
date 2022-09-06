import "./css/bootstrap.min.css";
import "./css/style.css";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Companies from "./pages/Companies";
import Contacts from "./pages/Contacts";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import People from "./pages/People";
import Setting from "./pages/Setting";
import { getPeople, getCompanies } from "./service";
import AddContact from "./pages/AddContact";
import { Dispatch } from "redux";

function App() {
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    getPeople(dispatch);
    getCompanies(dispatch);
  });
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper d-flex align-items-stretch">
          <Navigation />
          <div id="content" className="p-4 p-md-5 pt-5">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/favorites" element={<Favourites />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/add" element={<AddContact />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
