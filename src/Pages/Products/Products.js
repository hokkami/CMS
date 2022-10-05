import React, { useState } from "react";
import { products } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import "./Products.css";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Products() {
  const [productData, setProductData] = useState(products);

  const productDelete = (productID) => {
    setProductData(productData.filter((product) => product.id != productID));
  };

  const columns = [
    {
      field: "id",
      headerName: "کد",
      width: 50,
    },

    {
      field: "title",
      headerName: "نام محصول",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 120,
    },

    {
      field: "action",
      headerName: "عملیات",
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/product/${params.row.id}`} className="link actionRow">
              <button className="userListEdit">ویرایش</button>
              <DeleteOutlineIcon
                className="userListDelete"
                onClick={() => productDelete(params.row.id)}
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
        rows={productData}
        columns={columns}
        disableSelectionOnClick
        pageSize={4}
        checkboxSelection
      />
    </div>
  );
}
