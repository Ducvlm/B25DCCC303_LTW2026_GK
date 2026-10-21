import React from 'react';
import TaskRow from './TaskRow';

const TaskTable = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <p><strong>Tìm thấy {tasks.length} công việc</strong></p>
      ) : (
        <p><strong>Không có dữ liệu</strong></p>
      )}
      <table>
        <thead>
          <tr>
            <th>Công việc</th>
            <th>Người làm</th>
            <th>Ưu tiên</th>
            <th>Số giờ</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TaskRow 
              key={task.id} 
              task={task} 
              onToggle={onToggle} 
              onDelete={onDelete} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;