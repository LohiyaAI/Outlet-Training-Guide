import "./Sidebar.css";
import SidebarItem from "./SidebarItem";


interface MenuItem {
  title: string;
  children?: MenuItem[];
}

interface SidebarProps {
  menu: MenuItem[];
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  menu,
  selectedPage,
  setSelectedPage,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

      {menu.map((item) => (
        <SidebarItem
          key={item.title}
          item={item}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setSidebarOpen={setSidebarOpen}
        />
      ))}

    </aside>
  );
}