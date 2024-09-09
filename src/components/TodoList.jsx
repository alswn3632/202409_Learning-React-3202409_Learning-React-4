import React, { useRef, useState } from 'react';
import './todoList.css'
import CreateTodo from './CreateTodo';
import Todo from './Todo';

const TodoList = () => {

    const nextId = useRef(6);
    const [todos, setTodos] = useState([
        {
            id : 1,
            content : '방 청소하기',
            type : '할일',
            active : true       
        },{
            id : 2,
            content : 'mySQL 정리하기',
            type : '공부',
            active : false        
        },{
            id : 3,
            content : '정보처리기사 실기 접수',
            type : '공부',
            active : false        
        },{
            id : 4,
            content : '안산 5시 모임',
            type : '약속',
            active : false        
        },{
            id : 5,
            content : '산책 1시간',
            type : '운동',
            active : false        
        }
    ])

    const [inputs, setInputs] = useState({
        content : '',
        type : '기타'
    });

    const {content, type} = inputs;

    const onChange = (e) =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const onCreate = () =>{
        const todo = {
            id : nextId.current,
            content : content,
            type : type
        };

        setTodos(todos.concat(todo)); 

        setInputs({content : '', type : '기타'});
        
        nextId.current += 1;
    }

    const onRemove = (id)=>{
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const onToggle = (id)=>{        
        setTodos(
            todos.map(todo =>(
                todo.id === id? 
                {
                    ...todo,
                    active : !todo.active
                }
                : todo
            ))
        );
    }

    // const [bcColor, setBcColor] = useState('gray')

    // setBcColor(
    // )


    return (
        <div className='todoList'>
            <h1>My TodoList</h1>
            <CreateTodo content={content} type={type} onChange={onChange} onCreate={onCreate}/>
            <div className='todoBox'>
            {
                todos.map(t=>(
                    <Todo todo={t} key={t.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }
            </div>
        </div>
    );
};

export default TodoList;