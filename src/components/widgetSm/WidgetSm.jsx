import React, { useState, useEffect } from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import { newMembers } from "../../datas";
import "./WidgetSm.css";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    await fetch("https://cmsprj-5dd95-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(Object.entries(data));
      });
  }, []);

  return (  
    <div className="widgetSm">
      <span className="widgetSmTitle">همکاران</span>
      <ul className="widgetS mList">
        {/* {newMembers.map((user) => ( */}
        {users.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            {/* <img src={user.img} className="widgetSmImg" /> */}
            <div className="widgetSmUser">
              {/* <span className="widgetSmUserName">{user.username}</span> */}
              <span className="widgetSmUserName">
                {user[1].firstName} {user[1].lastName}
              </span>
              {/* <span className="widgetSmUserTitle"> {user.title}</span> */}
              <span className="widgetSmUserTitle"> {user[1].jobTitle}</span>
              <span className="widgetSmUserTitle"> {user[1].email} </span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
