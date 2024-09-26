import { useRef, useState } from 'react';

function BmiText({bmi}){
    if(bmi<18.5)
        return (<h1>Underweight</h1>);
    else if(bmi>30)
        return (<h1>Overweight</h1>);
    return (<h1>Normal</h1>) ;

}
export default function BMI() {
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi,setBmi] = useState(0.00);
    function handleClick() {
        // alert("you type " + W_input.current.value);
        // alert("you type " + H_input.current.value);
        let weight = W_input.current.value;
        let height = H_input.current.value/100;
        setBmi(weight/(height*height));
    }
    // function calculate(W_input,H_input){
    //     const bmi = (W_input/(H_input*H_input))
    // }
    return (<>
        <h3>Weight :
            <input ref={W_input} placeholder='กรอกน้ำหนัก' /> kg.
        </h3>
        {/* <br></br> */}
        <h3> Height :
            <input ref={H_input} placeholder='กรอกส่วนสูง' /> cm.
        </h3>
        <button onClick={handleClick} >calculate</button><br/>
        BMI :  {bmi.toFixed(2)}
        <BmiText bmi={bmi}/>


    </>);
}