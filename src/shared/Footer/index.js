import { Space } from "../Space";
import { FooterLabel, FooterLink } from "./styled";

const Footer = () => (
  <Space footer>
  <FooterLabel>
    powered by:
  </FooterLabel>
    <FooterLink
      className="App-link"
      href="https://ant.design/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ant Design
    </FooterLink>
  </Space>
);

export default Footer;