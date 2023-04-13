import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container container-fluid">
      <p className="media-container">Poke To The Moon Inc.</p>
      <div className="media-container">
        <Link href="https://www.tiktok.com/@poketothemoon">
          <i className="fa-brands fa-tiktok fa-2xl"></i>
        </Link>
        <Link href="https://www.instagram.com/poketothemoon/?hl=en">
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100083836400198">
          <i className="fa-brands fa-facebook fa-2xl"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
