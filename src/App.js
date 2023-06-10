import {useState} from "react";
import Layout from "./components/layout/Layout";

const App=() => {
  const [darkTheme,setDarkTheme]=useState(false);
  const toggleTheme=() => setDarkTheme(!darkTheme);
  return (
    <Layout toggleTheme={toggleTheme} darkTheme={darkTheme} />
  );
};
export default App;
