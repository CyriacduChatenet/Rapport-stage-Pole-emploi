import { Layout } from "../../common/components/layout/layout";
import "./contact.css";

export const ContactPage = () => {
  const email = "cyriacduchatenet@icloud.com";
  return (
    <Layout>
      <div id="contact">
        <h1 className="contactTitle">Contact</h1>
        <p
          className="contactLink"
          onClick={() => navigator.clipboard.writeText(email)}
        >
          cyriacduchatenet@icloud.com
        </p>
      </div>
    </Layout>
  );
};
