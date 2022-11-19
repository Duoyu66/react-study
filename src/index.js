/**
 * @author: 百米八秒的Rapper
 * @date: 2022-11-19 14:16:33
 * @fileName : index  description: 【  】
 **/

import React from "react";
import ReactDOM from  'react-dom'
import App from './App'
import {createRoot} from "react-dom/client";
import store from './redux/store'
store.subscribe(()=>{
    root.render(<App/>)
})
const container = document.getElementById('root')
// ReactDOM.render(<App/>,document.getElementById('root'))
const root = createRoot(container)
root.render(<App/>)