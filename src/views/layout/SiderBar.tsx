import { useAppState } from "@/state/AppContext";
import { List, ListItem, Typography } from "@mui/material";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menus } from "./menu";
import logo from "../../assets/logo.png";
import { Height } from "@mui/icons-material";
import { nanoid } from "nanoid";

const Item: FC<PropsWithChildren & { title: string; link: string }> = ({
  children,
  title,
  link,
}) => {
  const { collapse } = useAppState();
  const localtion = useLocation();
  const navigate = useNavigate();
  return (
    <ListItem
      className={classNames(
        "flex items-center justify-center gap-3  hover:bg-gray-200 rounded cursor-pointer w-full text-center",
        link && localtion.pathname.includes(link)
          ? "bg-gray-300 border-r-8 border-blue-500"
          : "bg-none border-none"
      )}
      onClick={() => navigate(link)}
    >
      <i className="ml-3">{children}</i>
      <Typography
        fontSize="large"
        className={classNames(
          "transition-all duration-50 ease-linear",
          collapse && "invisible"
        )}
      >
        {title}
      </Typography>
    </ListItem>
  );
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
          "cursor-pointer flex px-8 gap-3 items-center justify-start h-20",
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
              <Item title={menu.title} link={menu.link} key={nanoid()}>
                {menu.icon}
              </Item>
            ))}
          </List>
        </div>
      </div>
    </nav>
  );
};
