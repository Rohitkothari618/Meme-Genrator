import { useEffect, useState } from "react";
function Practice() {
  const [count, setCount] = useState(0);
  function Add(){
    return setCount((prevData)=>{
        return prevData+1        
    })
  }
  useEffect(()=>{
console.log("hy")
  },[])
  return (
    <div>
      <span>{count}</span>
      <button onClick={Add}>Add</button>
    </div>
  );
}

export default Practice;
