import {useState, useEffect} from 'react';

const Getman = (url) => {
    let [obj, setObj] = useState({data:null, pending:true, error:null});

    useEffect(() => {
      setTimeout(() => {
        fetch(url)
        .then(jfile => jfile.json())
        .then(fenal => {
          setObj({data: fenal, pending:false, error:null});
        }).catch (err => {
          setObj({...obj, pending:false, error:err.message});
        });
      }, 500);

    }, ['url']);

    return obj;
}
 
export default Getman;