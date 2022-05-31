import { useEffect, useState } from "react";

const useCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-shore-03299.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return [cars, setCars]
}

export default useCars;