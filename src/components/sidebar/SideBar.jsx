import React from "react";
import "./SideBar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenue">
          <h3 className="sidebarTitle">داشبورد</h3>
          <ul className="sidebarList">
            <Link to='/' className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                خانه
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              آنالیز
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              فروش
            </li>
          </ul>
        </div>

        <div className="sidebarMenue">
          <h3 className="sidebarTitle">دسترسی سریع</h3>
          <ul className="sidebarList">
            <Link to='/users' className="link">
            <li className="sidebarListItem">
              <PermIdentityIcon className="sidebarIcon" />
              کاربران
            </li>
            </Link>

            <Link to='/newUser' className="link">
            <li className="sidebarListItem">
              <PermIdentityIcon className="sidebarIcon" />
              کاربر جدید
            </li>
            </Link>
            <Link to='/products' className="link">
            <li className="sidebarListItem">
              <StorefrontIcon className="sidebarIcon" />
              محصولات
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              معاملات
            </li>
            <Link to='/newFeature' className="link">
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              گزارشات
            </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenue">
          <h3 className="sidebarTitle">اطلاع رسانی</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              ایمیل
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              بازخورد
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              پیامها
            </li>
          </ul>
        </div>

        <div className="sidebarMenue">
          <h3 className="sidebarTitle">کارکنان</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              مدیریت
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              آنالیز
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              گزارشات
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
