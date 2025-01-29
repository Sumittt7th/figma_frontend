import { Route, Routes } from "react-router-dom";
import Profile from "./pages/landingPage";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Profile />} />
    </Routes>
  );
}

export default App;
