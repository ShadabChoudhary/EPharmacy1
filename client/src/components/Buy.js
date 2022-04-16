import React from "react";
import Header from "./Header";
function Buy() {
  return (
    <div>
      <Header />
      <div>
        <form action="POST">
          <input type="text" placeholder="" />
        </form>
      </div>
    </div>
  );
}

export default Buy;
