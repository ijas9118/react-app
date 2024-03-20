import profilePic from "./assets/profile-pic.jpg";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="Profile picture" className="card-image" />
      <h2 className="card-title">Ijas Ahammed</h2>
      <p className="card-text">I am an aspiring Full-Stack Web Developer</p>
    </div>
  );
}

export default Card;
