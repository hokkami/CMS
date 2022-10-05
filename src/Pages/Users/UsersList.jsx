import React, { useEffect, useState } from "react";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import "./UsersList.css";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UsersList() {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userID) => {
    setUserDatas(userDatas.filter((user) => user.id != userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "کد",
      width: 50,
    },

    {
      field: "user",
      headerName: "کاربر",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },

    {
      field: "email",
      headerName: "ایمیل",
      width: 200,
    },

    {
      field: "status",
      headerName: "وضعیت",
      width: 120,
    },

    {
      field: "transaction",
      headerName: "پردازش",
      width: 160,
    },

    {
      field: "action",
      headerName: "عملیات",
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/user/${params.row.id}`} className="link actionRow">
              <button className="userListEdit">ویرایش</button>
              <DeleteOutlineIcon
                className="userListDelete"
                onClick={() => userDelete(params.row.id)}
              />
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
        <DataGrid
          rows={userDatas}
          columns={columns}
          disableSelectionOnClick
          pageSize={4}
        />
    </div>
  );
}
