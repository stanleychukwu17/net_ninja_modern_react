import {useState, useEffect} from 'react';

const Getman = (url) => {
    let [obj, setObj] = useState({data:null, pending:true, error:null});
    /* let [data, setData] = useState(null);
    let [pending, setPending] = useState(true);
    let [error, setError] = useState(false); */

    // return {data, pending, error};
    useEffect(() => {
      fetch(url)
      .then(jfile => jfile.json())
      .then(fenal => {
        setObj({data: fenal, pending:false, error:null});
      }).catch (err => {

      });

      // return () => 'time';
    }, ['url']);

    console.log('my obj', obj);
    return obj;
}
 
export default Getman;