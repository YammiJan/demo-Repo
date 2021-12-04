import React from "react";
import BooksAndServices from "./books&services";
import AppProfile from "./profile";

function AppHome() {
  return (
    <div>
      <AppProfile />
      <BooksAndServices />
    </div>
  );
}

export default AppHome;
