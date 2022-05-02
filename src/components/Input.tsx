type Props = {
    name: string,
    className?: string,
}

const Input: React.FC<Props> = ({ name, className }) => {
    return (
        <div className={className}>
            <label htmlFor={name} className='block mb-1 text-sm text-gray-800 capitalize'>{name}</label>
            <input type='text' id={name} className='w-full px-2 py-1 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400' />
        </div>
    )
}

export default Input;