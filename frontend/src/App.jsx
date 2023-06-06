import { useState } from 'react'
import './App.css'

import QRScanner from './QRScanner'
import QRScannerAdv from './QRScannerAdv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QRScannerAdv />
    </>
  )
}

export default App
