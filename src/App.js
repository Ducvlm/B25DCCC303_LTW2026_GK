import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("gk_tasks");
    if (localData) {
      setTasks(JSON.parse(localData));
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    axios.get("/data/tasks.json", { signal: controller.signal })
      .then(res => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (axios.isCancel(err)) return;
        setError(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("gk_tasks", JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  if (loading) return <div><strong>Đang tải...</strong></div>;
  if (error) return <div><strong>Không tải được dữ liệu.</strong></div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home tasks={tasks} />} />
        <Route path="tasks" element={<TaskList tasks={tasks} onToggle={updateTaskStatus} onDelete={deleteTask} />} />
        <Route path="tasks/new" element={<AddTask tasks={tasks} onAdd={addTask} />} />
        <Route path="tasks/:id" element={<TaskDetail tasks={tasks} />} />
      </Route>
    </Routes>
  );
};

export default App;