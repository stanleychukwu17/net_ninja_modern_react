import {useState, useEffect} from 'react';

const Getman = (url) => {
    let [data, setData] = useState(null);
    let [pending, setPending] = useState(true);
    let [error, setError] = useState(false);

    // return {data, pending, error};
    useEffect(() => {
      fetch(url).then(() =>).then();
      return () => 'time';
    }, []);


    return {data, pending, error}
}
 
export default Getman;