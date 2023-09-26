import { useEffect, useState } from 'preact/hooks'
import './app.css'
import fs from 'fs'
import { ChangeEvent } from 'preact/compat';
import { Card } from './custom';
import TextInputComponent from "./components/TextInputComponent"

export function App() {

  return (
    <div className="App">
     <span className="heading">SKYRFELL</span>
      <TextInputComponent /> 
    </div>
  )
}
