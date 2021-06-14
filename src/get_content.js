import {useState, useEffect} from 'react';

const Getman = (url) => {
  let [obj, setObj] = useState({data:null, pending:true, error:null});

  useEffect(() => {
    setTimeout(() => {
      console.log('sending info');

      fetch(url)
      .then(jfile => jfile.json())
      .then(fenal => {
        console.log('i ran', obj, obj.pending === true);
        setObj({data: fenal, pending:false, error:null});
      }).catch (err => {
        setObj({...obj, pending:false, error:err.message});
      });
    }, 500);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return obj;
}
 
export default Getman;