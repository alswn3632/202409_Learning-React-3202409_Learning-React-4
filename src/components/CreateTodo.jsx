import React from 'react';
import './todoList.css'

const CreateTodo = ({content, type, onChange, onCreate}) => {
    return (
        <div className='createTodo'>
            <div className='pbox'>
                <input 
                type="text" 
                name = 'content'
                placeholder='내용을 입력해주세요!'
                onChange={onChange}
                value={content}
                className='box box1'/>
                {/* <input 
                type="text" 
                name = 'type'
                placeholder='타입'
                onChange={onChange}
                value={type}/> */}
                {/* key={uuid()} value={type} */}
                <select name="type" value={type} onChange={onChange} className='box box2' >
                    <option value="기타">기타</option>
                    <option value="공부">공부</option>
                    <option value="할일">할일</option>
                    <option value="운동">운동</option>
                    <option value="약속">약속</option>
                </select>
                <button onClick={onCreate} className='box box3'>추가</button>
            </div>
        </div>
    );
};

export default CreateTodo;