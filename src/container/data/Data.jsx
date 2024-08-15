import React, { useState, useEffect} from 'react';
import Cardd from '../../components/Card/Card';
import { fetchData } from '../../service/data';
import './Data.css'

function Data(){
    const [info, setInfo ] = useState({})

    useEffect(()=>{
        const getData = async () => {
            try {
              const data = await fetchData();
              setInfo(data);
            } catch (err) {
              console.error(err, "wasnt able to do it")
            }
          };
      
          getData();
    }, [])

    console.log(info)
    const esta = Array.from(info).map((element)=>{
        console.log(element)
        return <Cardd company={element}/>
    })
    return(
        <div className='cardContainer'>
            {esta}
        </div>
    )

}

export default Data