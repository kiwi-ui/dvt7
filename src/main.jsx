import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = React.lazy(() => import('./App.jsx'))
const Loading = React.lazy(() => import('./components/Loading/index.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
            <Route path='/:name' element={ <App /> }/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
)
