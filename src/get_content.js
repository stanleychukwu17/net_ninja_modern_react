import {useState, useEffect} from 'react';

const Getman = (url) => {
    let [obj, setObj] = {data:null, pending:true, error:null};
    /* let [data, setData] = useState(null);
    let [pending, setPending] = useState(true);
    let [error, setError] = useState(false); */

    // return {data, pending, error};
    useEffect(() => {
      fetch(url)
      .then(jfile => jfile.json())
      .then(fenal => {
        // setData(fenal);
        /* setPending(false);
        setError(null); */
      }).catch (err => {

      });

      // return () => 'time';
    }, ['url']);

    return obj;
}
 
export default Getman;