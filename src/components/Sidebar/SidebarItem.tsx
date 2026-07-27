import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface MenuItem {
  title: string;
  badge?: string;
  children?: MenuItem[];
}

interface SidebarItemProps {
  item: MenuItem;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  level?: number;
}

export default function SidebarItem({
  item,
  selectedPage,
  setSelectedPage,
  setSidebarOpen,
  level = 0,
}: SidebarItemProps) {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <>
      <button
        className={
          selectedPage === item.title
            ? level === 0
              ? "sidebar-btn active"
              : "submenu-btn active"
            : level === 0
            ? "sidebar-btn"
            : "submenu-btn"
        }
        style={{ paddingLeft: `${18 + level * 18}px` }}
        onClick={() => {
          if (hasChildren) {
            setOpen(!open);
          } else{
            setSelectedPage(item.title);
            setSidebarOpen(false);
          }      
        }}
      >
        <div className="sidebar-title-row">
          <span>{item.title}</span>
          {item.badge && (
            <span className="sidebar-badge">
              {item.badge}
            </span>
          )}
        </div>

        {hasChildren &&
          (open ? (
            <FiChevronDown className="arrow" />
          ) : (
            <FiChevronRight className="arrow" />
          ))}
      </button>

      {open &&
        item.children?.map((child) => (
          <SidebarItem
            key={child.title}
            item={child}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setSidebarOpen={setSidebarOpen}
            level={level + 1}
          />
        ))}
    </>
  );
}