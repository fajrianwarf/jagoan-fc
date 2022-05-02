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
import { ageCalc } from '../helper';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const Graph: React.FC = () => {
	const { data } = useContext(DataContext);
    
    const titleDivision = 'Division Group by Age Comparison'
    const titleMember = 'Membership Status Comparison'
    
    const options = (title: string) => {
        return {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: title,
                },
            },
        }
    };

    const dataGraphDivisionMap = () => {
        let div1 = data.filter( (item: any) => parseInt(ageCalc(item.dob)) < 10 ).length;
        let div2 = data.filter( (item: any) => parseInt(ageCalc(item.dob)) >= 10 && parseInt(ageCalc(item.dob)) <= 15 ).length;
        let div3 = data.filter( (item: any) => parseInt(ageCalc(item.dob)) >= 16 && parseInt(ageCalc(item.dob)) <= 19 ).length;
        let div4 = data.filter( (item: any) => parseInt(ageCalc(item.dob)) > 20 ).length;
        return [div1, div2, div3, div4]
    }

    const dataGraphMemberMap = () => {
        let active = data.filter((item: any) => item.status === 'active').length;
        let inactive = data.filter((item: any) => item.status === 'inactive').length;
        return [active, inactive]
    }

    const dataGraphDivision = {
		labels: ['I, >10 yo', 'II, 10-15 yo', 'III, 16-20 yo', 'IV, >20 yo'],
		datasets: [
			{
				label: '/ person',
				data: dataGraphDivisionMap(),
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	const dataGraphMember = {
		labels: ['Active', 'Inactive'],
		datasets: [
			{
				label: '/ person',
				data: dataGraphMemberMap(),
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};
    
	return (
		<>
			<div className='p-4 border rounded-lg'>
				<Bar options={options(titleDivision)} data={dataGraphDivision} />
			</div>
			<div className='p-4 border rounded-lg'>
				<Bar options={options(titleMember)} data={dataGraphMember} />
			</div>
		</>
	);
};

export default Graph;
