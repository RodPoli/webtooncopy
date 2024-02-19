import Manhwa from "./Manhwa.js";
const manhwaData = [
  {
    photoName: "images/RemarriedEmpress.jpg",
    name: "The Remarried Empress",
    author: "Alphatart / Sumpul",
    likes: 33.6,
  },
  {
    photoName: "images/ImtheQueeninThisLife.jpg",
    name: "I'm the Queen in This Life",
    author: "Themis / Omin",
    likes: 5.2,
  },
  {
    photoName: "images/TeenageMercenary.jpg",
    name: "The Teenage Mercenary",
    author: "YC / Rakyeon",
    likes: 12.4,
  },
  {
    photoName: "images/GAR.jpg",
    name: "Go Away Romeo",
    author: "Paintword",
    likes: 3.1,
  },
  {
    photoName: "images/The+Guy+Upstairs.jpg",
    name: "The Guy Upstairs",
    author: "Hanza Art",
    likes: 4.2,
  },
  {
    photoName: "images/GreatestEstateDev.jpg",
    name: "The Greatest Estate Developer",
    author: "Lee hyunmin / Kim Hyunsoo",
    likes: 6.5,
  },
  {
    photoName: "images/MuseOnFame.jpg",
    name: "Muse On Fame",
    author: "SOOJIN",
    likes: 2.3,
  },
  {
    photoName: "images/FromKnighttoLady.jpg",
    name: "From a Knight to a Lady",
    author: "Ink. / Hyerim Sting",
    likes: 6.6,
  },
  {
    photoName: "images/WishedYouWereDead.jpg",
    name: "Wished You Were Dead",
    author: "SEOCHEONG / ARAN",
    likes: 7.6,
  },
  {
    photoName: "images/CoupleBreaker.jpg",
    name: "Couple Breaker",
    author: "Maenggi Ki / Taegeon",
    likes: 1.2,
  },
];
function Content() {
  return (
    <div className="content">
      <div className="content-header">
        <h4>DRAMA</h4>
        <h4>By Popularity</h4>
      </div>
      <div className="manhwacontent">
        {manhwaData.map((manhwa) => (
          <Manhwa manhwaObj={manhwa} />
        ))}
      </div>
    </div>
  );
}

export default Content;
