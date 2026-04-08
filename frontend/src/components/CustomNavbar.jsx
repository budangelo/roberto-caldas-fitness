import "./CustomNavbar.css";
import StaggeredMenu from "./StaggeredMenu";

function CustomNavbar() {
  const menuItems = [
    { label: "Inicio", ariaLabel: "Ir a inicio", link: "#home" },
    { label: "Servicios", ariaLabel: "Ir a servicios", link: "#services" },
    { label: "Sobre mí", ariaLabel: "Ir a sobre mí", link: "#about" },
    { label: "Info", ariaLabel: "Ir a info", link: "#info" },
    { label: "Autores", ariaLabel: "Ir a autores", link: "#authors" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <div className="custom-navbar-wrapper">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#111111"
        changeMenuColorOnOpen={true}
        colors={["#1a1a1a", "#550C0D"]}
        accentColor="#bd1c1f"
        isFixed={true}
        logoUrl={null}
      />
    </div>
  );
}

export default CustomNavbar;