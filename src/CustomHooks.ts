import {useState, useRef} from "react";

const usePrevious = (value: any) => {
const currentValue = useRef(value);
const previousRef = useRef();
if(currentValue.current!==value){
    previousRef.current = currentValue.current
}
return previousRef.current;
}

export default {usePrevious};