import React from 'react';
import { Link } from 'react-router-dom';

const TaskRow = ({ task, onToggle, onDelete }) => {
  return (
    <tr className="task-row">
      <td style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      </td>
      <td>{task.assignee}</td>
      <td>{task.priority}</td>
      <td>{task.hours}</td>
      <td><strong>{task.done ? 'Đã xong' : 'Đang làm'}</strong></td>
      <td>
        <button onClick={() => onToggle(task.id)}>
          <strong>{task.done ? 'Làm lại' : 'Hoàn thành'}</strong>
        </button>
        {' '}
        <button onClick={() => onDelete(task.id)}>
          <strong>Xóa</strong>
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;