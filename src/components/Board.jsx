import { useEffect, useState } from "react"
import "../App.css"
export const Board=()=>{

    const [tic,setTic]=useState(false)

    const [p1,setP1]=useState("")
    const [p2,setP2]=useState("")
    const [p3,setP3]=useState("")
    
    const [p4,setP4]=useState("")
    const [p5,setP5]=useState("")
    const [p6,setP6]=useState("")

    const [p7,setP7]=useState("")
    const [p8,setP8]=useState("")
    const [p9,setP9]=useState("")

    const [win,setWin]=useState("")

    // useEffect(()=>{
    //     if(p1=="O" && p2=="O" && p3=="O" || p4=="O" && p5=="O" && p6=="O" || p7=="O" && p8=="O" && p9=="O" ||
        
    //     p1=="O" && p4=="O" && p7=="O" || p2=="O" && p5=="O" && p8=="O" || p3=="O" && p6=="O" && p9=="O" ||
        
    //     p1=="O" && p5=="O" && p9=="O" || p3=="O" && p5=="O" && p7=="O" )
    // {
    //     setWin("Team O is Winner ✌")
        
    //     setTimeout(() => {
    //         window.location.reload()
            
    //     }, 4000);
    // }

    // },[tic])

    useEffect(()=>{
        if(p1=="X" && p2=="X" && p3=="X" || p4=="X" && p5=="X" && p6=="X" || p7=="X" && p8=="X" && p9=="X" ||
        
        p1=="X" && p4=="X" && p7=="X" || p2=="X" && p5=="X" && p8=="X" || p3=="X" && p6=="X" && p9=="X" ||
        
        p1=="X" && p5=="X" && p9=="X" || p3=="X" && p5=="X" && p7=="X" )
        
    {
        setWin("Team X is Winner ✌")
        
        setTimeout(() => {
            window.location.reload()
            
        }, 4000);
    }

    else if(p1=="O" && p2=="O" && p3=="O" || p4=="O" && p5=="O" && p6=="O" || p7=="O" && p8=="O" && p9=="O" ||
        
    p1=="O" && p4=="O" && p7=="O" || p2=="O" && p5=="O" && p8=="O" || p3=="O" && p6=="O" && p9=="O" ||
    
    p1=="O" && p5=="O" && p9=="O" || p3=="O" && p5=="O" && p7=="O" )
{
    setWin("Team O is Winner ✌")
    
    setTimeout(() => {
        window.location.reload()
        
    }, 4000);
}

else{
    if(p1!="" && p2!="" && p3!="" && p4!="" && p5!="" && p6!="" && p7!="" && p8!="" && p9!="")
    {
        setWin("No Results, Draw ")
        
        setTimeout(() => {
            window.location.reload()
            
        }, 1000);
    }
}

    },[tic])

    

    
    return(

        <div className="masterdiv">

<div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>


<h1>Tic Tac Toe</h1>
            <button className="mybutton" onClick={()=>{
                setP1("")
                setP2("")
                setP3("")
                setP4("")
                setP5("")
                setP6("")
                setP7("")
                setP8("")
                setP9("")
                setWin("")

            }}>Reset</button>
            <div className="mainboard">
                <div onClick={()=>{setTic(!tic),win==""& p1==""?setP1(tic ?"O":"X"):null}} className={p1=="O"?"myred":"myblue"}>{p1}</div>
                <div onClick={()=>{setTic(!tic),win==""& p2==""?setP2(tic ?"O":"X"):null}} className={p2=="O"?"myred":"myblue"}>{p2}</div>
                <div onClick={()=>{setTic(!tic),win==""& p3==""?setP3(tic ?"O":"X"):null}} className={p3=="O"?"myred":"myblue"}>{p3}</div>

                <div onClick={()=>{setTic(!tic),win==""& p4==""?setP4(tic ?"O":"X"):null}} className={p4=="O"?"myred":"myblue"}>{p4}</div>
                <div onClick={()=>{setTic(!tic),win==""& p5==""?setP5(tic ?"O":"X"):null}} className={p5=="O"?"myred":"myblue"}>{p5}</div>
                <div onClick={()=>{setTic(!tic),win==""& p6==""?setP6(tic ?"O":"X"):null}} className={p6=="O"?"myred":"myblue"}>{p6}</div>

                <div onClick={()=>{setTic(!tic),win==""& p7==""?setP7(tic ?"O":"X"):null}} className={p7=="O"?"myred":"myblue"}>{p7}</div>
                <div onClick={()=>{setTic(!tic),win==""& p8==""?setP8(tic ?"O":"X"):null}} className={p8=="O"?"myred":"myblue"}>{p8}</div>
                <div onClick={()=>{setTic(!tic),win==""& p9==""?setP9(tic ?"O":"X"):null}} className={p9=="O"?"myred":"myblue"}>{p9}</div>
            </div>
            <h1>{win}</h1>
  

           
        </div>
        
    )
}