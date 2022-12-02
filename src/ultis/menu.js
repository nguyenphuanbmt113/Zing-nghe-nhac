import icons from "./icons";
const {
  MdOutlineLibraryMusic,
  RiCompassDiscoverLine,
  BsPieChart,
  AiOutlinePlayCircle,
} = icons;
export const sidebarMenu = [
  {
    id: 1,
    path: "mymusic",
    text: "Cá nhân",
    icon: <MdOutlineLibraryMusic size="24px"></MdOutlineLibraryMusic>,
  },
  {
    id: 2,
    path: "/",
    text: "Khám phá",
    icon: <RiCompassDiscoverLine size="24"></RiCompassDiscoverLine>,
  },
  {
    id: 3,
    path: "zing-chart",
    text: "zing-chart",
    icon: <BsPieChart size="24"></BsPieChart>,
  },
  {
    id: 4,
    path: "follow",
    text: "Theo dõi",
    icon: <AiOutlinePlayCircle size="24"></AiOutlinePlayCircle>,
  },
];
