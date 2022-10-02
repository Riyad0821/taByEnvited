import { Link } from "react-router-dom";
import Button from "../../components/Button";
import birthday_cake from "../../resource/birthday_cake.png";
import { useEffect, useState } from "react";

function EventDetails() {
  const [eventData, setEventData] = useState({});
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("eventData"));
    if (items) {
      setEventData(items);
    }
  }, []);
  return (
    <div className=" mx-auto">
      <img
        className="object-contain"
        src={birthday_cake}
        alt="Event Card"
      ></img>
      <h3>{eventData?.eventName}</h3>
      <p>
        Hosted by <span>{eventData?.hostName}</span>
      </p>
      <Link to={"/"}>
        <Button btnText="Back" />
      </Link>
    </div>
  );
}

export default EventDetails;
