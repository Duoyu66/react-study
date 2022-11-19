/**
 * @author: 百米八秒的Rapper
 * @date: 2022-11-19 15:06:38
 * @fileName : store  description: 【 该文件专门用于暴露一个store对象，整个应用只有一个store对象 】
 **/

import {createStore} from "redux";
import countReducer from './count_reducer'
export default  createStore(countReducer)