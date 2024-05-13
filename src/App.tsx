import React, {FC, memo, useCallback, useState} from 'react';
import './App.css';
import usePrevious from './CustomHooks'

const A:FC<any> = memo(({foobar}) => {
    console.log('A render');
    return <></>
})
const App = () => {
   console.log('App render');
   const [counter, setCounter] = useState(0);
   const foobar = useCallback(() => {

   }, [])
    const [item1, setItem1] = useState('asd');
    const [item2, setItem2] = useState('qwe');

   return (
       <div>
           <A foobar={foobar} arr={[item1, item2]}/>
           <button onClick={() => {
               setCounter(counter+1);
           }}>click</button>
       </div>
   )
};

export default App;

