import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create'
import { useState } from 'react';

export default function TodoForm({addTodo}){
    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={text} id="outlined-basic" label="Add ToDo" 
            variant="outlined"
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="create todo"
                    edge="end" type='submit'
                  >
                    <Create/>
                  </IconButton>
                </InputAdornment>
                )
            }}
            />
            </form>
        </ListItem>
    );
}

