import { createContext, useState } from 'react';
import AddMember from './components/AddMember';
import Graph from './components/Graph';
import Navbar from './components/Navbar';
import Table from './components/Table';
import dummy from './dummy';

export const DataContext = createContext<any>([]);

function App() {
	const [data, setData] = useState(dummy);
	const value = { data, setData };

	return (
		<DataContext.Provider value={value}>
			<div>
				<Navbar />
				<div className='grid grid-cols-2 mx-4 my-4 gap-x-4'>
					<Graph />
				</div>
				<div className='flex flex-row mx-4 my-4 gap-x-4'>
					<AddMember />
					<Table />
				</div>
			</div>
		</DataContext.Provider>
	);
}

export default App;
