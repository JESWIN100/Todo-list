import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Checkbox, Divider, Fab, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
    toast.info('Task Deleted');
  };

  const checkTask = () => {
    toast.success('Task completed!');
  };

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh', // Ensure the component takes full height of the viewport
      padding: '20px',
      background: '#f0f0f0', // Light gray background
    }}>
      <Box sx={{ 
        maxWidth: '400px', // Limit width for better readability
        width: '100%',
      }}>
        <Typography 

        variant="h4"
         component="h4"
          align="center" 
          gutterBottom
          sx={{ mb: 2 }}
          >
          Todo List
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ marginBottom: 2 }}>
          <TextField
            id="outlined-basic"
            label="Enter Todo"
            variant="outlined"
            value={newTask}
            onChange={handleInputChange}
            fullWidth
          
          />
          <Fab 
          color="primary" 
          aria-label="add" 
          onClick={addTask}
          
          >
            <AddIcon />
          </Fab>
        </Stack>

        <List>
          {tasks.map((task, index) => (
            <div key={index}>
              <ListItem>
                <Checkbox edge="start" tabIndex={-1} disableRipple onClick={checkTask} />
                <ListItemText primary={task} />
                <Fab size="small" color="secondary" aria-label="delete" onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </Fab>
              </ListItem>
              {index < tasks.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Box>
      <ToastContainer />
    </Box>
  );
}
