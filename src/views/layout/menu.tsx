import {
  BuildOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  PersonOutlineOutlined,
  ReportOutlined,
  TextSnippetOutlined,
  UploadFileOutlined,
} from "@mui/icons-material";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";


export const menus = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <HomeOutlined />,
  },
  {
    title: "Pages",
    link: "/pages",
    icon: <TextSnippetOutlined />,
  },
  {
    title: 'Scenarios', 
    link: '/scenarios',
    icon: <ReceiptLongOutlinedIcon />
  },
  {
    title: 'Suites', 
    link: '/suites',
    icon: <FolderOpenOutlined />
  }, 
  {
    title: 'Reports', 
    link: '/reports', 
    icon: <ReportOutlined />
  }, 
  {
    title: 'Users',
    link: '/users', 
    icon: <PersonOutlineOutlined />
  },
  {
    title: 'Jmeter',
    link: '/jmeters', 
    icon: <BuildOutlined />
  }, 
  {
    title: 'Upload',
    link: '/upload', 
    icon: <UploadFileOutlined />
  }
];
