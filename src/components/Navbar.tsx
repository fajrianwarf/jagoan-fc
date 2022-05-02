let today = new Date();
export let date = ('0'+today.getDate()).slice(-2) +'-'+ ('0'+(today.getMonth()+1)).slice(-2) +'-'+ today.getFullYear();

function Navbar() {
    return(
        <div className="flex justify-between px-6 py-4 text-gray-600 bg-sky-300">
            <div className="font-medium uppercase">Jagoan FC - APP</div>
            <div>Date : {date}</div>
        </div>
    )
}

export default Navbar;