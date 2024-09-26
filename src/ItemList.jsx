import { useState, useEffect } from "react";

function Item({ name, isPacked }) {
    // if(isPacked) return (<li>{name} ✓ </li>);
    // return (<li>{name}</li>);\

    // return (
    //     <li>
    //         {isPacked ? name + '✓':name}
    //     </li>
    // )

    return (
        <li>
            {name} {isPacked && '✓'}
        </li>
    )


}
export default function ItemList() {
    // return (
    //     <ui>
    //         <Item name="Sunglass" isPacked={true}/>
    //         <Item name="Sunblock" isPacked={false}/>
    //         <Item name="Swimming suit" isPacked={true}/>
    //         <Item name="Towels" isPacked={true}/>
    //     </ui>
    //)
    // const items = ["Sunglass", "Sunblock", "Swimming suit", "Towels", "Powerbank"];
    const [keyword, setkeyword] = useState("");
    useEffect(() => {
        console.log("this component is loaded!");
        return ()=> {
            alert("component unloaded!");
        }
    }, []);
    const items = [{ name: "Sunglass", isPacked: true },
    { name: "Sunblock", isPacked: false },
    { name: "Swimming suit", isPacked: true },
    { name: "Towels", isPacked: true },
    { name: "Powerbank", isPacked: false },
    { name: "ผ้าเช็คตัว", isPacked: true }];
    const filterList = items.filter(i => i.name.toLowerCase().includes(keyword.toLowerCase()));
    const itemList = filterList.map(i => <Item key={i.name}
        name={i.name} isPacked={i.isPacked} />);
    return (
        <div>
            <input type="text" value={keyword} onChange={e => setkeyword(e.target.value)} />
            <ul >
                {itemList}
            </ul>

        </div>


    );
}