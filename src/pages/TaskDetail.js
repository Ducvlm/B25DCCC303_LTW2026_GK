import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WorkTimer from '../components/WorkTimer';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return (
      <div>
        <p><strong>Không tìm thấy công việc</strong></p>
        <button onClick={() => navigate(-1)}><strong>Quay lại</strong></button>
      </div>
    );
  }

  return (
    <div>
      <p><strong>Tên công việc: {task.title}</strong></p>
      <p><strong>Người làm: {task.assignee}</strong></p>
      <p><strong>Mức ưu tiên: {task.priority}</strong></p>
      <p><strong>Số giờ: {task.hours}</strong></p>
      <p><strong>Trạng thái: {task.done ? 'Đã xong' : 'Đang làm'}</strong></p>
      
      <WorkTimer />
      
      <button onClick={() => navigate(-1)}><strong>Quay lại</strong></button>
    </div>
  );
};

export default TaskDetail;
