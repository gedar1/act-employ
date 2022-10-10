// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const getData= async() => {
  try {
    const res =await fetch('https://my-json-server.typicode.com/luisforerop/type-of-positions/db')
    const data = await res.json(res)
    console.log(data)
    return {
      props:{
        data
      }
    }
    
  } catch (error) {
    
  }
}
