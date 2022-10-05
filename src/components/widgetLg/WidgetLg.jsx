import React from "react";
import "./WidgetLg.css";
import { transactions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type} وضعیت</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">آخرین معاملات</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">مشتری</th>
          <th className="widgetLgTh">تاریخ</th>
          <th className="widgetLgTh">مبلغ</th>
          <th className="widgetLgTh">وضعیت پرداخت</th>
        </tr>

        {transactions.map((customer) => (
          <tr key={customer.id} className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={customer.img} alt="Aks" className="widgetLgImg" />
              <span className="widgetLgName">{customer.customer}</span>
            </td>
            <td className="widgetLgDate">{customer.date}</td>
            <td className="widgetLgAmount">{customer.amout}$</td>
            <td className="widgetLgStatus">
              <Button type={customer.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
