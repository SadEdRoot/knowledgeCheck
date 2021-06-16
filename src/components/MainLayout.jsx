import React from 'react';
import Content from "./Content";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <main>
      <Content/>
      <Sidebar/>
    </main>
  );
};

export default MainLayout;
