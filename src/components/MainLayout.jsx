import React from 'react';
import Content from "./Content";
import Sidebar from "./Sidebar";

import style from "./MainLayout.module.scss"

const MainLayout = () => {
  return (
    <main className={style.main}>
      <Content/>
      <Sidebar/>
    </main>
  );
};

export default MainLayout;
