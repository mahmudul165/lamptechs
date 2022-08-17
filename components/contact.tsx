import Form from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type SocialLinks = {
  facebookURL: string;
  twitterURL: string;
  instagramURL: string;
};

export default function Contact(props: { socialLinks: SocialLinks }) {
  const { socialLinks } = props;
  return (
    <section className="section" id="contact">
      <h2 className="title"> Contact Us </h2>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="small-title">Get In Touch</p>
              <h5>+8801745676547</h5>
              <h5>contact@lamptechs.com</h5>
              <br />
              <br />
              <p className="small-title">Social Media</p>
              <nav className="level is-mobile">
                <div className="level is-mobile" style={{ margin: "auto" }}>
                  <a href={socialLinks.facebookURL} className="level-item">
                    <span className="icon is-large">
                      <FontAwesomeIcon icon={faFacebook as IconProp} />
                    </span>
                  </a>
                  <a href={socialLinks.twitterURL} className="level-item">
                    <span className="icon is-medium">
                      <FontAwesomeIcon icon={faTwitter as IconProp} />
                    </span>
                  </a>
                  <a href={socialLinks.instagramURL} className="level-item">
                    <span className="icon is-medium">
                      <FontAwesomeIcon icon={faInstagram as IconProp} />
                    </span>
                  </a>
                </div>
              </nav>
            </div>
            <div className="tile is-child box">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=115%20Ahmedbag,%20Global%20Islami%20Bank%20Building,%20Budhho%20Mondir,%20Dhaka-1214%201214%20Dhaka,%20Dhaka%20Division,%20Bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
