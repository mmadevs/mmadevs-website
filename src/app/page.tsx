import { NavBar } from "./organisms/NavBar";

import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen">
        <NavBar />
        <Welcome />
        <h1>Teste</h1>
      </div>
    </>
  );
}
