import ContentHome from "@/components/ContentHome";
import SidebarMenu from "@/components/SidebarMenu";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <SidebarMenu />
      <ContentHome />
    </main>
  );
}
