import { useContext } from 'react';
import { DataContext } from '../App';
import { ageCalc } from '../helper';

const Table: React.FC = () => {
	const { data, setData } = useContext(DataContext);

	const divisionCalc = (age: string) => {
		const division = parseInt(ageCalc(age));

		if (division < 10) {
			return 'I';
		} else if (division >= 10 && division <= 15) {
			return 'II';
		} else if (division >= 16 && division <= 19) {
			return 'III';
		} else if (division > 20) {
			return 'IV';
		}
	};

	const changeActivationMember = (member: any) => {
		const active = 'active';
		const inactive = 'inactive';
		let dataFilter = data.find((item: any) => item.id === member.id);
		let dataLeft = data.filter((item: any) => item.id !== member.id);

		if (dataFilter.status === active) {
			dataFilter.status = inactive;
		} else if (dataFilter.status === inactive) {
			dataFilter.status = active;
		}
		let dataCombine = [...dataLeft, dataFilter];
		setData(dataCombine);
	};

	const deleteMember = (member: any) => {
		let dataFilter = data.filter((item: any) => item.id !== member.id);
		setData(dataFilter);
	};

	return (
		<div className='flex flex-col w-full'>
			<div className='relative w-full overflow-x-auto rounded-md shadow-md'>
				<table className='w-full text-sm text-center text-gray-500'>
					<thead className='text-xs text-gray-600 uppercase bg-sky-300'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								id
							</th>
							<th scope='col' className='px-6 py-3'>
								name
							</th>
							<th scope='col' className='px-6 py-3'>
								address
							</th>
							<th scope='col' className='px-6 py-3'>
								gender
							</th>
							<th scope='col' className='px-6 py-3'>
								dob
							</th>
							<th scope='col' className='px-6 py-3'>
								division
							</th>
							<th scope='col' className='px-6 py-3'>
								status
							</th>
							<th scope='col' className='px-6 py-3'>
								edit
							</th>
						</tr>
					</thead>
					<tbody>
						{data
							.sort((a: any, b: any) => {
								let fa = a.address.toLowerCase(),
									fb = b.address.toLowerCase();

								if (fa < fb) {
									return -1;
								}
								if (fa > fb) {
									return 1;
								}
								return 0;
							})
							.map((item: any) => (
								<tr key={item.id}>
									<td className='px-6 py-3 capitalize'>{item.id}</td>
									<td className='px-6 py-3 capitalize'>{item.name}</td>
									<td className='px-6 py-3 capitalize'>{item.address}</td>
									<td className='px-6 py-3 capitalize'>{item.gender}</td>
									<td className='px-6 py-3'>
										{item.dob} {`(${ageCalc(item.dob)})`}
									</td>
									<td className='px-6 py-3'>{`${divisionCalc(item.dob)}`}</td>
									<td className='px-6 py-3 gap-x-2'>
										<div className={`${ item.status === 'active' ? 'bg-green-200' : 'bg-red-200' } rounded-md px-2 py-1 capitalize`} >
											{item.status}
										</div>
									</td>
									<td className='flex justify-center w-full px-6 py-3 gap-x-2'>
										<button
											className={`${ item.status === 'active' ? 'text-red-300' : 'text-blue-300' }`}
											onClick={() => changeActivationMember(item)}
										>
                                            {`${ item.status === 'active' ? 'disable' : 'activate' }`}
                                        </button>
										|
										<button className='text-red-300' onClick={() => deleteMember(item)} >
											delete
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
