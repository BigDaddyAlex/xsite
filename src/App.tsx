import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import ContactPage from "./components/contactPage";
import Unauth from './components/unauth';


const App = () => {
  return (
    <div className="App bg-black" style={{ height: 999 }}>
      <Routes>
        <Route path="" element={<Unauth />} >
          <Route path="" element={<Home />} />
          <Route path="Contact" element={<ContactPage />} />
        </Route>
      </Routes>

    </div>
  );
};

export default App;