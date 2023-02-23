import { useState ,useEffect} from "react";
const Demo=(()=>{
    // let dem={
    //     id:"kn23"
    
    
    // }
    

    
    let arr=[2,4,"string"]
    
    arr.forEach(element => {
        
        console.log(element+"*");
        
    });
    const [txt, setTxt] = useState("Hello World");
    
    
    let x=0;
    if(x===0)
    {
        setTxt("The Value is 0")
    }
    useEffect(() => {
        console.log(txt);
    
    }, [])
    
   
})
export default Demo;


