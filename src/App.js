import {useState} from "react";
//import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
//import {TodosDataProvider} from "./contexts/ToDosDataContext";
//import ToDoManager from "./components/todo/ToDoManager";
import Layout from "./components/layout/Layout";

const App=() => {
  //const [displayStatus,setDisplayStatus]=useState("all"); // all, pending, completed
  //const [important,setImportant]=useState(false);
  //const [searchText,setSearchText]=useState("");
  const [darkTheme,setDarkTheme]=useState(false);
  const toggleTheme=() => setDarkTheme(!darkTheme);
  return (

    <Layout toggleTheme={toggleTheme} darkTheme={darkTheme}>

    </Layout>

  );
};
export default App;
