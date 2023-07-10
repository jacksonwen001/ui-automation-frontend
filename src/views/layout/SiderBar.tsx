import { FC, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import { nanoid } from "nanoid";

import { useAppState } from "@/state/AppContext";
import { menus } from "./menu";
import logo from "../../assets/logo.png";

const Item: FC<{
  menu: { title: string; link: string; icon: ReactNode; children?: any[] };
}> = ({ menu }) => {
  const { collapse } = useAppState();
  const localtion = useLocation();
  const navigate = useNavigate();
  const { link, title, icon, children } = menu;

  let listItem = (
    <>
      <ListItemButton
        sx={{
          borderRight: localtion.pathname.includes(link)
            ? "8px #1976d2 solid"
            : "none",
          backgroundColor: localtion.pathname.includes(link)
            ? "#cfd8dc"
            : "none",
        }}
        onClick={() => navigate(link)}
      >
        <ListItemIcon className="ml-3">{icon}</ListItemIcon>
        <Typography
          fontSize="large"
          className={classNames(
            "transition-all duration-50 ease-linear",
            collapse && "hidden"
          )}
        >
          {title}
        </Typography>
      </ListItemButton>
    </>
  );

  return listItem;
};

export const SiderBar = () => {
  const { collapse } = useAppState();
  const navigate = useNavigate();
  return (
    <nav
      className={classNames(
        "fixed top-0 left-0 h-full bg-gray-50 py-3 z-100 transition-all duration-300 ease-in",
        collapse ? "w-[88px]" : "w-64"
      )}
    >
      <header
        className={classNames(
          "cursor-pointer flex px-8 gap-3 items-center justify-start h-20"
        )}
        onClick={() => navigate("/")}
      >
        <span>
          <img
            src={logo}
            alt="logo"
            className={classNames(
              "rounded-full transition-all duration-300 ease-in",
              collapse ? "w-10" : "w-20"
            )}
          />
        </span>
        {!collapse && <div className="font-bold"> web automation</div>}
      </header>
      <div className="overflow-scroll h-full mt-5">
        <div className="">
          <List className="space-y-3">
            {menus.map((menu) => (
              <Item menu={menu} key={nanoid()} />
            ))}
          </List>
        </div>
      </div>
    </nav>
  );
};
