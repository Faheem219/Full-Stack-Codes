import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm'
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from './Navbar';

function App() {

  return (
    <>
      <Button variant="contained" color='error'>Contained</Button>
      <Button variant="text" color='success'>Text</Button>
      <Button variant="outlined" onClick={()=>alert("hi")} size='large'>Outlined</Button>

      <IconButton color='secondary' aria-label='add an alarm'><AlarmIcon/></IconButton>

      <RatingDemo/>

      <Navbar/>
      <FormDemo/>
    </>
  );
}

export default App
