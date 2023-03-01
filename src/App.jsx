import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ErrorPage, HomePage, NotFoundPage, EventPage } from './pages';
import { Header, Footer } from './components';
import { ERROR_ROUTE, HOME_ROUTE, EVENT_ROUTE } from './constant/routes';
function App() {
  return (
    <div className="appContainer">
      <div className="appBodyContainer">
        <BrowserRouter>
          <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={EVENT_ROUTE} element={<EventPage />} />
            <Route
              path={`${ERROR_ROUTE}/:errorCode?`}
              element={<ErrorPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
