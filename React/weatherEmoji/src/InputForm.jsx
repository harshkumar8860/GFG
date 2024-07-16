import React from "react";

function inputForm() {
  return (
    <form onSubmit={sendData} onChange={(e) => e}>
      <input type="text" />
    </form>
  );
}

export default inputForm;
