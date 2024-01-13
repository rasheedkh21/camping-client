import { Button } from '@mui/material';
import React from 'react'
import handleDownload from "./cvexapmle.pdf"



const CV = () => {



  return (
    <div>
        <p>you can download it </p>
       <a href={handleDownload} target='_blank' download="Example-PDF-document"
  
  rel="noreferrer"> <Button>Download</Button></a>
    </div>
  )
}

export default CV;