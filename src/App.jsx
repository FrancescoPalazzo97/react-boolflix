import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import { LibraryProvider } from "./contexts/LibraryContext";

function App() {

  return (
    <LibraryProvider>
      <Header />
      <Main />
    </LibraryProvider>
  )
}

export default App
