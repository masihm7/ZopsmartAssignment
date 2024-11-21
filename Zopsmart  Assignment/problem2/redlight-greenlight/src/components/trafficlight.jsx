import { useEffect, useState } from "react"

export const TrafficLight = () =>{
    const [color, setColor] = useState('')
    useEffect(()=>{
        const colorlist = [{c:'green',d:3000},{c:'yellow',d:2000},{c:'red',d:5000},{c:'yellow',d:2000}]
        let i = 0 
        let timer
        const changer =()=>{
            setColor(colorlist[i].c)
            timer = setTimeout(changer,colorlist[i].d)
            i = (i+1) % colorlist.length
        }
        changer()
        return ()=>clearTimeout(timer)
    },[])

    return(

        <div id="container">
        <div id="box">
            <div id="light" style={{backgroundColor: color}} ></div>
        </div>
        </div>
    )
}