import { createContext, useState } from "react";
import AddMember from "./components/AddMember";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import dummy from "./dummy";

// interface AppContext {
//   id: string,
//   name: string,
//   address: string,
//   gender: string,
//   dob: string,
// }

export const DataContext = createContext<any>([]);

function App() {
  const [data, setData] = useState(dummy);
  const value = { data, setData }
  
  return (
    <DataContext.Provider value={value}>
      <div>
        <Navbar />
        <div className="flex flex-row mx-4 my-4 gap-x-4">
          <AddMember />
          <Table />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
