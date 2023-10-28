import "./App.css";
// import { CatFact } from "./components/CatFact";
// import { PredictAge } from "./components/PredictAge";
// import Greet from "./components/greet";
// import Welcome from "./components/greetClass";
// import Message from "./components/message";
// import ParentComponent from "./components/parentComponent";
// import { Form } from "./components/Form";
// import { PostList } from "./components/PostLists";
// import { PostForm } from "./components/PostForm";
// import { UseTransition } from "./components/UseTransition";
// import CounterClass from "./components/CounterClass";
// import ListClass from "./components/ListClass";
// import AddItem from "./components/AddItem";
// import Planets from "./components/Planets";
// import ToDoList from "./components/ToDoList";
// import { planets } from "./planetList";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Profile } from "./Pages/Profile";
import { Contact } from "./Pages/Contact";
// import { Home } from "./Pages/Home";
// import { useState, createContext } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// export const AppContext = createContext();

//import { PedroForm } from "./components/PedroForm"; //react-hook-form

//import { CatFactCustHook } from "./components/CatFactCustHook"; // cutom hook with fetch

//redduyx demo
import { Login } from "./Pages/Login";
import { NewHome } from "./Pages/NewHome";
import { Provider } from "react-redux";
import { store } from "./store";
import PasswordGenerator from "./components/PasswordGenerator";
function App() {
	// let guitars = ["a", "b", "c"];

	// const [userName, setUserName] = useState("pranith"); //use contecxt

	// const client = new QueryClient({
	//   defaultOptions: {
	//     queries: {
	//       refetchOnWindowFocus: true,
	//     },
	//   },
	// }); //configurations for use react query

	return (
		<div className="App">
			{/* <Greet name ="name1" lName="soup"/>
      <Greet name ="name2" lName="soup2">
        <p>clidren props</p>
      </Greet>
      <Welcome />
      <Message/>
      <ParentComponent/>
      <Form/> */}
			{/* <PostList />
      <PostForm /> */}
			{/* <UseTransition /> */}
			{/* <CounterClass startAt={0} countBy={1} /> */}
			{/* <AddItem />
      <ListClass title="Guitars" items={guitars} /> */}
			{/* <Planets planets={planets} /> */}
			{/* <ToDoList /> */}
			{/* <CatFact /> */}
			{/* <PredictAge /> */}
			{/* Router/State(ContextAPI)/react Query example */}
			{/* <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userName, setUserName }}>
          <Router>
            <div>
              <Link to="">Home</Link>
              <Link to="profile">Profile</Link>
              <Link to="contact">Contact</Link>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Page ! found</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider> */}

			{/* react-hook-form with yup validation */}
			{/* <PedroForm />  */}

			{/* custom hook */}
			{/* <QueryClientProvider client={client}>
        <CatFactCustHook />
      </QueryClientProvider> */}

			{/* redux-toolkit demo */}
			{/* <Provider store={store}>
        <Router>
          <div>
            <Link to="">Home</Link>
            <Link to="login">Login</Link>
            <Link to="contact">Contact</Link>
          </div>
          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page ! found</h1>} />
          </Routes>
        </Router>
      </Provider> */}
			<PasswordGenerator />
		</div>
	);
}

export default App;
