import React from 'react';
import { Input } from '@material-ui/core';


const newTask = ({handleSubmit, handleChange, task}) => {

            return(
        <div>
            <form id="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                <Input 
                id="standard-basic" 
                placeholder="Task" 
                color="secondary"
                inputProps={{style: {color: 'white'}}}
                inputlabelprops={{style: {color: 'grey'}}}
                value={task}
                onChange={handleChange}
                />
                <input 
                type="submit" 
                value="Add task"
                style={{margin: "10px"}} />
            </form>
        </div>
    );
}

export default newTask;