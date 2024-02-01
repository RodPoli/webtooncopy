function Footer() {
  return (
    <div className="footer">
      <div className="download">
        <h4>Download WEBTOON now!</h4>
        <div className="sameline">
          <img src="images/googleplay.png" alt="googleplay" />
          <img src="images/appstore.png" alt="appstore" />
        </div>
      </div>
      <div className="Links">
        <ul className="socialmediaicons">
          <li>
            <img src="images/facebook.png" alt="facebook"></img>
          </li>
          <li>
            <img src="images/ig.png" alt="instagram"></img>
          </li>
          <li>
            <img src="images/twit.png" alt="twitter"></img>
          </li>
          <li>
            <img src="images/yt.png" alt="youtube"></img>
          </li>
        </ul>
        <ul className="information">
          <li>About</li>
          <li>Feedback</li>
          <li>Help</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Advertise</li>
          <li>Contact</li>
        </ul>
        <p>ⓒ NAVER WEBTOON Ltd.</p>
        <img src="images/webtoonfooter.png" alt="webtoonfooter"></img>
      </div>
    </div>
  );
}
export default Footer;
