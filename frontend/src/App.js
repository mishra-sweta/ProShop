import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
