import {useState, useEffect} from 'react';

const Getman = (url) => {
    let [data, setData] = useState(null);
    let [pending, setPending] = useState(true);
    let [error, setError] = useState(false);

    // return {data, pending, error};
    useEffect(() => {
      fetch(url).then(jfile => jfile.json())
      .then(fenal => {
        setData(fenal);
        setPending(false);
        setError(null);
      }).catch (err => {

      });

      return () => 'time';
    }, []);

    return {data, pending, error}
}
 
export default Getman;