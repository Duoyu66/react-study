import React, {Component} from 'react';
import store from '../../redux/store'
//引入store用于获取redux中保存的状态
class Count extends Component {
    state={count:0}
    // componentDidMount() {
    //     //检测redux状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //     this.setState({})
    //     })
    // }

    increment=()=>{
        const {value} = this.selectNumber
      store.dispatch({type:'increment',data:value*1})
    }
    decrement=()=>{
        const {value} = this.selectNumber
        store.dispatch({type:'decrement',data:value*1})
    }
    icrementIfOdd=()=>{

        const {value} = this.selectNumber
        const count= store.getState()
       if (count % 2   !==0){
           store.dispatch({type:'increment',data:value*1})
       }
    }
    incrementAsync=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
setTimeout(()=>{
    this.setState({count: count+value*1})
},500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为 {store.getState()}</h1>
                <select  ref={c =>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.icrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

export default Count;