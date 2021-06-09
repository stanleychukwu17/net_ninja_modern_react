import {useState, useEffect} from 'react';

const Get_it = (url) => {
    let [data, setData] = useState(null);
    let [pending, setPending] = useState(true);
    let [error, setError] = useState(false);

    return {data, pending, error};
}
 
export default Get_it;