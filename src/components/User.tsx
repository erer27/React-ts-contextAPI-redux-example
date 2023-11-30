import { useDispatch, useSelector } from "react-redux";
import { RootState, setName } from "../store";

import React from "react";

const User = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          dispatch(setName(e.target.value));
        }}
      ></input>
    </div>
  );
};

export default User;
