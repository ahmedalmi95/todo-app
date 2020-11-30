import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import  data  from "./../data/data.json";
import {
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 600,
    float: "left",
    background: "#eeeeee",
    padding: "10px",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  subCard: {
    border: "1px solid red",
  },
  listItems: {
    background: "#eeeeee",
    borderRadius: "0",
    borderLeft: "2px solid red",
    cursor: "pointer",
  },
}));

function TodoApp() {
  const classes = useStyles();
  const [modulesList, updateModulesList] = useState(data.modulesList);

  const handleOnDragEnd = (result) => {
    console.log(result);
  };

  
  return (
    <div>
      <Box className={classes.root}>
        <Typography className={classes.title}>Teachiz Todo App</Typography>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div
                className={classes.root}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {modulesList.map((module, index) => (
                  <Draggable draggableId={module._id} key={index}>
                    {(provided) => (
                      <Paper
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={classes.paper}
                      >
                        <Typography variant="h5" component="h2">
                          <DragIndicatorIcon /> {module.name}
                        </Typography>
                        {module.items.map((item) => (
                          <List
                            component="nav"
                            aria-label="secondary mailbox folders"
                            key={item._id}
                          >
                            <ListItem className={classes.listItems}>
                              <ListItemText primary={item.name} />
                            </ListItem>
                          </List>
                        ))}
                        {provided.placeholder}
                      </Paper>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </div>
  );
}

export default TodoApp;
