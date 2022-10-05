import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "./../../components/chart/Chart";
import { productData } from "./../../datas";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">محصول جدید</h1>
        <Link to="/newProduct">
          <button className="productAddBtn">ایجاد محصول جدید</button>
        </Link>
      </div>
       <div className="productTop">
        <div className="productTopRight">
          <Chart
            className="chartProduct"
            title="فروش فصل"
            data={productData}
            dataKey="sales"
          />
        </div>
        <div className="productTopLeft">
          <div className="productInfoTop">
            <img src="/Image/Protrek.jpg" className="productInfoImg" />
            <span className="productName">ساعت پروتک کاسیو</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">کد:</div>
              <div className="productInfoValue">132</div>
            </div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">عنوان:</div>
              <div className="productInfoValue">G-Shoke</div>
            </div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">فروش ماهیانه:</div>
              <div className="productInfoValue">500000$</div>
            </div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">فعال:</div>
              <div className="productInfoValue">بلی</div>
            </div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">موجود در انبار:</div>
              <div className="productInfoValue">خیر</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormRight">
            <label>نام محصول</label>
            <input type="text" placeholder="" />

            <label>موجود در انبار؟</label>
            <select id="inStorage">
              <option value="yes">بله</option>
              <option value="no">خیر</option>
            </select>

            <label>فعال است؟</label>
            <select id="isActive">
              <option value="yes">بله</option>
              <option value="no">خیر</option>
            </select>
          </div>

          <div className="productFormLeft">
            <div className="productUploader">
              <img
                src="/Image/Protrek.jpg"
                alt="Protrek"
                className="productUploaderImg"/>

              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{display:'none'}} />
            </div>
              <button className='productButton'>بارگزاری</button>
          </div>
        </form>
      </div>
    </div>
  );
}
