import {useState, useEffect} from 'react';

const Getman = (url) => {
    let [obj, setObj] = useState({data:null, pending:true, error:null});

    // return {data, pending, error};
    useEffect(() => {
      setTimeout(() => {
        fetch(url)
        .then(jfile => jfile.json())
        .then(fenal => {
          setObj({data: fenal, pending:false, error:null});
        }).catch (err => {
          console.log('there is an error', err);
        });
      }, 4000);

      // return () => 'time';
    }, ['url']);

    return obj;
}
 
export default Getman;