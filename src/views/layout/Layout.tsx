import { Outlet } from "react-router-dom";
import { Avatar, Badge, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import classNames from "classnames";
import { NotificationsOutlined, SettingsOutlined } from "@mui/icons-material";

import { SiderBar } from "./SiderBar";
import { useAppState } from "@/state/AppContext";
import { toggleSidebar } from "@/state/appReducer";
import avatar from "@/assets/avatar.gif";

export const Layout = () => {
  const { collapse, dispatch } = useAppState();
  return (
    <div className="flex w-screen h-screen">
      <SiderBar />
      <section
        className={classNames(
          "w-full text-2xl transition-all duration-300 ease-in",
          collapse
            ? "ml-[88px] w-[calc(100%-88px)]"
            : "ml-64 w-[calc(100%-256px)]"
        )}
      >
        <header className="h-20 border-b flex items-center">
          <div className="grow">
            <IconButton
              sx={{
                marginLeft: "0.5rem",
              }}
              onClick={() => dispatch(toggleSidebar())}
            >
              {collapse ? (
                <MenuIcon fontSize="large" />
              ) : (
                <MenuOpenIcon fontSize="large" />
              )}
            </IconButton>
          </div>
          <div className="mr-8 cursor-pointer flex items-center gap-5 pt-1 h-full">
            <Badge badgeContent={4} color="primary" >
              <NotificationsOutlined fontSize="medium"/>
            </Badge>
            <Badge>
              <SettingsOutlined />
            </Badge>
          </div>
          <div className="mr-10">
            <Avatar src={avatar} />
          </div>
        </header>
        <main className="my-12 px-3">
          <Outlet />
        </main>
      </section>
    </div>
  );
};
