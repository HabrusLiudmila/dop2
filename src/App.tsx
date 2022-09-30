import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState <Array<PropsType>>([])       //повторить!!!<>

    // useEffect(()=>{},[])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setTodos(json))
    },[])

    const onClickHandle = () => {
        setTodos([])
    }

    return (
        <div className="App">
            <button onClick={onClickHandle}>Clean post</button>
            <ul>
                {todos.map(el => {

                    return (
                        <li>
                            <span>{el.userId}</span>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
                <li></li>
                <li></li>
            </ul>
        </div>

    );
}

export default App;
