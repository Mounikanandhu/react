import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="card">
      <h2 className="heading">Mounika</h2>

      <p style={{ color: "blue", fontSize: "16px" }}>
        Age: 22
      </p>

      <p style={{ fontStyle: "italic" }}>
        Location: Hyderabad
      </p>
    </div>
  );
};

export default ProfileCard;
