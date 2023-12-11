
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'
TextField
function App() {
const [interest,setInterest]=useState(0)
const [principle,setPrinciple]=useState(0)
const [rate,setRate]=useState(0)
const [year,setYear]=useState(0)
console.log(principle);
const validUserInputs =(e)=>{
  const{ame,value} =e.target
  console.log(`${name},${typeof value}`);
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
}

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark' >
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3 style={{height:'55px'}}>Simple Intrest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div style={{ width: '100%', height: '150px' }} className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column'>
          <h1 style={{height:'55px'}}>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Intrest</p>

        </div>
        <form className="mt-5">
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-principle" label="₹Principle Amount" variant="outlined"name='principle' value={principle ||""}/>
          </div>
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-rate" label="Rate of Intrest(%)" variant="outlined"name='rate'value={rate ||""} />
          </div>
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-time" label="Time Period(Yr)" variant="outlined" name='year'value={year ||""} />
          </div>
          <Stack direction="row" spacing={2}>
            <Button type='submit'style={{height:'70px',width:'50%'}}className='bg-dark'variant="contained">CALCULATOR</Button>
            <Button style={{height:'70px',width:'50%'}}className='text-dark' variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>

    </div>

  )
}

export default App
