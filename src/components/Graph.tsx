import { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { DataContext } from '../App';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { ageCalc } from './Table';

// -------------- config graphic bar start ----------
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options1 = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Division Group by Age Comparison',
		},
	},
};

const options2 = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Membership Status Comparison',
		},
	},
};

// --------------- config graphic bar end -------------

const Graph: React.FC = () => {
	const { data, setData } = useContext(DataContext);

	let div1 = data.filter( (item: any) => parseInt(ageCalc(item.dob)) < 10 ).length;
	let div2 = data.filter( (item: any) => parseInt(ageCalc(item.dob)) >= 10 && parseInt(ageCalc(item.dob)) <= 15 ).length;
	let div3 = data.filter( (item: any) => parseInt(ageCalc(item.dob)) >= 16 && parseInt(ageCalc(item.dob)) <= 19 ).length;
	let div4 = data.filter( (item: any) => parseInt(ageCalc(item.dob)) > 20 ).length;

	const dataGraphDivision = {
		labels: ['I', 'II', 'III', 'IV'],
		datasets: [
			{
				label: '/ person',
				data: [div1, div2, div3, div4],
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	let active = data.filter((item: any) => item.status === 'active').length;
	let inactive = data.filter((item: any) => item.status === 'inactive').length;

	const dataGraphMember = {
		labels: ['active', 'inactive'],
		datasets: [
			{
				label: '/ person',
				data: [active, inactive],
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};
	return (
		<>
			<div className='p-4 border rounded-lg'>
				<Bar options={options1} data={dataGraphDivision} />
			</div>
			<div className='p-4 border rounded-lg'>
				<Bar options={options2} data={dataGraphMember} />
			</div>
		</>
	);
};

export default Graph;
