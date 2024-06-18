import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ListItemText from '@mui/material/ListItemText';

export default function TodoItem({todo, removeTodo, toggle}){
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
    <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                <RemoveCircleOutlineIcon/>
            </IconButton>
        }
        disablePadding
    >
    <ListItemButton role={undefined} dense>
        <ListItemIcon>
            <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={toggle}
            />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} />
    </ListItemButton>
    </ListItem>
    );
}