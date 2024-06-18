import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if(!data) return [];
    return data;
}

export default function TodoList(){

    const [todos, setTodos] = useState(getInitialData);

    // Using local storage to save the changes permanently
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter((t)=> t.id!==id);
        })
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if(todo.id===id){
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}]
        }) // This will also give us a random unique id, no need to install uuid seperately
    }
    
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: 3,
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            React ToDos
            </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                return <TodoItem todo={todo} toggle={()=>toggleTodo(todo.id)} removeTodo={()=>removeTodo(todo.id)} key={todo.id} />
            })}
            <TodoForm addTodo={addTodo}/>
        </List>
        </Box>
    );
}