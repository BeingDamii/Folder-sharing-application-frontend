import Form from "../assets/Form";
import Logo from "../assets/Logo";
import { HomeStyled } from "../styles/home.styled";
import ctaImg from "../assets/cta-img.png"

const Home = () => {
  return (
    <HomeStyled>
      <Logo />
      <div className="item-wrapper">
        <Form />
        <div className="cta-items">
          <h1>Manage your online folders, seamlessly like a pro.</h1>
          <p>
            This simple application allows you to create a folder of images or
            documents and share it with your friends using a link, just like
            Dropbox.
          </p>
        </div>
        <img src={ctaImg} alt="cta-img" className="cta-img" />
      </div>
    </HomeStyled>
  );
};

export default Home;
