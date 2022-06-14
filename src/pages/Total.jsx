import React, { useEffect, useState } from 'react';
import styles from './all.module.css'; 

const Total = () => {
    const [show, setshow] = useState([]);
    
    useEffect(() => {
       fetch("http://localhost:8080/todosdb")
       .then((r)=> r.json())
       .then((e)=>setshow(e))   
      
    }, [])
    

    
    return (
    <div>
        <h2>Total Todo-List</h2>

        {show.map((el)=>(

            <div key={el.id}>
                <ul className={styles.total}>
                    <li>{el.value}</li>
                </ul>
            </div>
        ))}

    </div>
  )
}

export default Total