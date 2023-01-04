import fbIcon from "./../resources/fb-icon.png";
import instaIcon from "./../resources/insta-icon.webp";
import twitterIcon from "./../resources/twitter-icon.webp";
import tiktokIcon from "./../resources/tiktok.png";
import copyRightIcon from "./../resources/copyRight.svg";

function ZooFooter() {
  return (
    <div>
      <div id="iconsFooter">
        <span>
          <a href="https://de-de.facebook.com/zoozuerich/" target="_blank">
            <img className="SozialMediaIcons" src={fbIcon}></img>
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/zoozuerich/?hl=de" target="_blank">
            <img className="SozialMediaIcons" src={instaIcon} />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/zoozuerich" target="_blank">
            <img className="SozialMediaIcons" src={twitterIcon} />
          </a>
        </span>
        <span>
          <a href="https://www.tiktok.com/@zoozuerich" target="_blank">
            <img className="SozialMediaIcons" src={tiktokIcon} />
          </a>
        </span>
      </div>
      <img src={copyRightIcon} />
    </div>
  );
}

export default ZooFooter;
