import '../styles/globals.css'
import FormState from '../context/formcontext/FormState'



function MyApp({ Component, pageProps }) {
  
  
 
  return (
  <FormState>
  <Component {...pageProps} />
  </FormState>

  
  )
}

export default MyApp
