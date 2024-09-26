export default function MouseEvent(){
    return (<h1
    onClick={e=>alert("onClick")}
    
    onMouseOver={e=>alert("onMouseOver")}
    onMouseDown={e=>alert("onMouseDown")}
    onMouseUp={e=>alert("onMouseUp")}
    onMouseLeave={e=>alert("onMouseEnter")}
    >Click Me</h1>);
}