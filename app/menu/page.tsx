import Navbar from "../components/navbar/navbar.comp";
import Footer from "../components/footer/footer.comp";
import Image from "next/image";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className='menu-container'>
      <Image
        src="/images/pokemenu.png"
        alt="Menu"
        layout="responsive"
        width={772}
        height={1000}
      />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
