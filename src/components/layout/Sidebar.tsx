import SidebarLogo from "../sidebar/SidebarLogo";
import SidebarNav from "../sidebar/SidebarNav";
import SidebarNotification from "../sidebar/SidebarNotification";
import SidebarProfile from "../sidebar/SidebarProfile";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-[240px] shrink-0 border-r border-[var(--border)] bg-white">

      <div className="flex h-full flex-col">

        <SidebarLogo />

        <SidebarNav />

        <div className="mt-auto space-y-4 p-4">
          <SidebarNotification />
          <SidebarProfile />
        </div>

      </div>

    </aside>
  );
}