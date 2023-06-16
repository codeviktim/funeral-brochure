import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import file from './asset/docx.pdf'

import './App.css'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function App(){
  const [numPages,setNumPages]= React.useState(null)
  const [pageNumber,setPageNumber] = React.useState(1)
 
  const onDocSuccess=()=>setNumPages(numPages)
  const prevPage=()=>setPageNumber(pageNumber-1 <= 1 ? 1:pageNumber-1)
  const nextPage=()=>setPageNumber(pageNumber>32? 32 : pageNumber+1)

  return(
    <div className='container'>
      <div className='btns'>
        <button onClick={prevPage}>prev</button>
          <span>{pageNumber}</span>
        <button onClick={nextPage}>next</button>
      </div>
      <Document file={file} onLoadSuccess={onDocSuccess}>
        <Page pageNumber={pageNumber}/>
      </Document> 
    </div>
  )
}