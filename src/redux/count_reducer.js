/**
 * @author: 百米八秒的Rapper
 * @date: 2022-11-19 15:08:58
 * @fileName : count_reducer  description: 【  】
 **/
/*
* 1.该文件是用于创建一个为Count组件服务的reducer,,reducer的本质就是一个函数
* 2.reducer函数会接到两个参数，：分别为之前的状态(preState),动作对象(action)
* */
const initState = 0
export default function countReducer(preState=initState,action){
    if (preState===undefined) preState=0
    //从action中获取:type 、data
    const {type,data} = action
    //根据type决定如何加工数据
    switch (type){
        case 'increment':
            return preState+data
        case 'decrement':
            return preState-data
        default:
            return preState
    }
}