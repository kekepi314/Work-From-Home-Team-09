import React from "react";
import "../App.css";
import Heading from "./Heading";

const taskList =[
    {
        title: "Make a Wirefame",
        date: "7/2/2020",
        priority: "High",
        progress: "In Progess"
    },
    {
        title: "Create User Stories",
        date: "7/8/2020",
        priority: "Low",
        progress: "Complete"    },
    {
        title: "Talk to Team about Design",
        date: "7/15/2020",
        priority: "Medium",
        progress: "In Progess"    },
    {
        title: "Create Story Board",
        date: "7/18/2020",
        priority: "Low",
        progress: "Complete"    },

    {
        title: "Speak with Client",
        date: "6/18/2020",
        priority: "High",
        progress: "In progress"    },

    {
        title: "Create Landing Page",
        date: "7/1/2020",
        priority: "Low",
        progress: "Complete"    },
    {
        title: "Speak with Frank ",
        date: "5/18/2020",
        priority: "Low",
        progress: "Complete"    },

    {
        title: "Speak with Backend Team",
        date: "7/8/2020",
        priority: "High",
        progress: "In progress"    },
    {
        title: "Talk With Client About Design",
        date: "7/13/2020",
        priority: "Medium",
        progress: "Complete"    },

    {
        title: "Check Deadlines With Project Manager",
        date: "7/18/2020",
        priority: "High",
        progress: "In progress"    },
    {
        title: "Ask Linda for Project Requirements",
        date: "7/18/2020",
        priority: "Low",
        progress: "Complete"    },
    {
        title: "Ask Tim for Design Advice for Prototype",
        date: "7/18/2020",
        priority: "Low",
        progress: "Complete"    },


];


function Task(){


    function renderTasks() {
        let taskDivs = taskList.map((task, id) => {

            let styles = {
                margin: "25px",
                height: "215px",
                width: "400px",
                padding: "10px",
                borderRadius: "25px",
                boxShadow: "2px 5px lightgray",
                display: "inline-block"

            };

            return<div style={styles}>

                <div  className="taskText">
                    <h1>{task.title}</h1>
                    <p>Due Date:{task.date}</p>
                    <p>Priority: {task.priority}</p>
                    <p>{task.progress}</p>

                </div>
            </div>


        });
        return taskDivs;
    }


    return(
        <div>
            <Heading/>
            <h1 className="headingStyle">Mood Check-In</h1>
            {renderTasks()}
        </div>

    )
}



export default Task;