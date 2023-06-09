import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error404 } from './containers/errors/Error404.jsx';
import { FullClientLayout } from './hocs/layouts/FullClientLayout.jsx';
import { Admin, Contactenos, Eventos, Home, Nosotros, Restaurantes } from "./containers/pages/";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<FullClientLayout />}>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/contactenos" element={<Contactenos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
        </Route>
        <Route path="/admin/" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
