import React ,{useEffect,useState} from "react"
import axios from "axios"

   function  Data() {
    const [data, setData]=useState([])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data) )
      .catch(err => console.log(err));
    }, [])
    return(
      <div>
         {
          data.map((user,i) => {

            return <ul>
                    <li key={i}> {user.name}</li>
                   </ul>
        })
      }
      </div>
    )}
export default Data 







