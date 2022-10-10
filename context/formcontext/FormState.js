import ContextForm from './ContexForm'
import {useState} from 'react'

const FormState = ({children}) => {

    const [option,setOption] = useState('cargo')
    const [jobs,setJobs] = useState()

 const getData  = async() => {
        try {
          const res =await fetch('https://my-json-server.typicode.com/luisforerop/type-of-positions/db')
          const data = await res.json(res)
          setJobs(data)
          console.log(data)
          return {
            props:{
              data
            }
          }
          
        } catch (error) {
          
        }
      }

    return (
        <ContextForm.Provider value={{option,setOption,getData,jobs}} >
            {children}
        </ContextForm.Provider>
    )
}

export default FormState
