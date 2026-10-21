import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import TaskTable from '../components/TaskTable';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('Tất cả');

  const filteredTasks = tasks.filter(task => {
    const matchSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPriority = filterPriority === 'Tất cả' || task.priority === filterPriority;
    return matchSearch && matchPriority;
  });

  return (
    <div>
      <FilterBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        filterPriority={filterPriority} 
        onFilterChange={setFilterPriority} 
      />
      <TaskTable 
        tasks={filteredTasks} 
        onToggle={onToggle} 
        onDelete={onDelete} 
      />
    </div>
  );
};

export default TaskList;