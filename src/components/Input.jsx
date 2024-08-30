import { useSetRecoilState } from 'recoil';
import { formState } from '../store/recoil.js';
import { useState } from 'react';

const Input = () => {
    const setForm = useSetRecoilState(formState);

    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });

    const addTodo = () => {
        setForm((prev) => [
            ...prev,
            todo
        ]);
        setTodo({ title: '', description: '' }); // Reset the input fields
    };

    return (
        <div>
            <span>Title : </span>
            <input 
                type="text" 
                value={todo.title} 
                onChange={(e) => {
                    setTodo((prev) => ({
                        ...prev,
                        title: e.target.value
                    }))
                }}
            />
            <br />
            <span>Description : </span>
            <input 
                type="text" 
                value={todo.description} 
                onChange={(e) => {
                    setTodo((prev) => ({
                        ...prev,
                        description: e.target.value
                    }))
                }}
            />
            <br />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default Input;
