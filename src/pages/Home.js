import React from 'react';

const Home = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.done).length;
  
  const hoursLeft = tasks.reduce((sum, task) => {
    return !task.done ? sum + task.hours : sum;
  }, 0);

  return (
    <div>
      <h2>Công việc nhóm</h2>
      <p><strong>Tổng số công việc: {totalTasks}</strong></p>
      <p><strong>Số công việc đã xong: {completedTasks}</strong></p>
      <p><strong>Tổng số giờ còn lại: {hoursLeft}</strong></p>
    </div>
  );
};

export default Home;