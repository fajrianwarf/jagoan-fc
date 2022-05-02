import { useEffect, useRef } from "react";

// this custom hook will call the callback everytime the dependencies is changing 
const useUpdateEffect = (callback: any, dependencies: any) => {
	const firstRenderRef = useRef(true);

	useEffect(() => {
		if(firstRenderRef.current) {
			firstRenderRef.current = false
			return	
		}
		return callback()
	}, dependencies)
}

export default useUpdateEffect;
