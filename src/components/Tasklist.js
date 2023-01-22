import React from 'react'

export const Tasklist = ({handleEditTask,handleDeleteTask,tasks}) => {
  return (
    <div className="list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="edit" onClick={()=> handleEditTask(index)}>Edit
              </button>
              <button
                className="delete"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
  )
}
