import { useContext, useState } from "react";
import { DataContext } from "../App";
import { date } from "./Navbar";

// interface Iprops {
//     addDataContext: Dispatch<SetStateAction<boolean>>;
// }

// const AddMember: React.FC<Iprops> = ({addDataContext} : Iprops) => {
const AddMember: React.FC = () => {
    const { data, setData } = useContext(DataContext);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('male')
    const [dob, setDob] = useState('')

    const dobReverser = (dob: any) => {
        return dob.split("-").reverse().join("-")
    }

    const sendData = () => {
        const status = 'active';
        let fullData = {};
        let uniqId = new Date().getTime().toString();

        let reverseDob = dobReverser(dob);
        fullData = { 
            id: uniqId, 
            name, 
            address, 
            gender, 
            dob: reverseDob, 
            status 
        }
        
        setData([...data, fullData])
    }

    return(
        <div className="h-full px-4 py-6 border rounded-lg shadow-sm w-96">
            <div className="mb-2 font-medium text-center text-gray-700 uppercase">Add New Member</div>
            <div>
                <label htmlFor={'name'} className='block mb-1 text-sm text-gray-800 capitalize'>name</label>
                <input type='text' id={'name'} onChange={e => setName(e.target.value)} className='w-full px-2 py-1 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400' />
            </div>
            <div>
                <label htmlFor={'address'} className='block mb-1 text-sm text-gray-800 capitalize'>address</label>
                <input type='text' id={'address'} onChange={e => setAddress(e.target.value)} className='w-full px-2 py-1 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400' />
            </div>
            <div>
                <label htmlFor='gender' className='block mb-1 text-sm text-gray-800 capitalize'>gender</label>
                <select name="gender" id="gender" value={gender} onChange={e => setGender(e.target.value)} className="w-full px-2 py-1 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <div>
                <label htmlFor='dob' className='block mb-1 text-sm text-gray-800'>Date of Birth</label>
                <input type="date" name="dob" id="dob" placeholder="DD/MM/YYYY" min="01-01-1990" max={date} value={dob} onChange={(e) => setDob(e.target.value)} className="w-full px-2 py-1 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400" />
            </div>
            <button type="submit" onClick={() => sendData()} className="w-full px-2 py-1 mt-2 rounded-md shadow-sm bg-sky-200">Add</button>
        </div>
    )
}

export default AddMember;