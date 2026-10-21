import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ paddingBottom: '10px', borderBottom: '1px solid #000' }}>
      <NavLink to="/" end style={{ marginRight: '15px' }}><strong>Trang chủ</strong></NavLink>
      <NavLink to="/tasks" end style={{ marginRight: '15px' }}><strong>Danh sách</strong></NavLink>
      <NavLink to="/tasks/new" end><strong>Thêm mới</strong></NavLink>
    </nav>
  );
};

export default NavBar;