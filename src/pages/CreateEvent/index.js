import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    hostName: "",
    eventStartDate: "",
    eventEndDate: "",
    location: "",
    photo: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const storeEventData = () => {
    console.log("hi");
    localStorage.setItem("eventData", JSON.stringify(eventData));
  };
  return (
    <div className="mx-auto w-10/12 mt-10">
      {" "}
      <Link to={"/"}>
        {" "}
        <Button btnText="Back" />
      </Link>
      <p>Create your event</p>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <Label labelText="Event Name" labelFor="eventname" />
            <Input
              id="eventname"
              type="text"
              name="eventName"
              placeholderText="Enter event name"
              onChange={handleInputChange}
              value={eventData.eventName}
            />
          </div>
          <div className="mb-4">
            <Label labelText="Host Name" labelFor="hostname" />
            <Input
              id="hostname"
              type="text"
              name="hostName"
              placeholderText="Enter host name"
              onChange={handleInputChange}
              value={eventData.hostName}
            />
          </div>
          <div className="mb-4">
            <Label labelText="Start Date" labelFor="startdate" />
            <Input
              id="startdate"
              type="datetime-local"
              name="startDate"
              onChange={handleInputChange}
              value={eventData.eventStartDate}
            />
          </div>
          <div className="mb-4">
            <Label labelText="End Date" labelFor="enddate" />
            <Input
              id="enddate"
              type="datetime-local"
              name="endDate"
              onChange={handleInputChange}
              value={eventData.eventEndDate}
            />
          </div>
          <div className="mb-4">
            <Label labelText="Location" labelFor="location" />
            <Input
              id="location"
              type="text"
              name="location"
              placeholderText="Enter location"
              onChange={handleInputChange}
              value={eventData.location}
            />
          </div>
          <div className="mb-4">
            <Label labelText="Event Photo" labelFor="photo" />
            <Input
              id="eventphoto"
              type="file"
              name="photo"
              accept="image/png, image/jpeg"
              onChange={handleInputChange}
              value={eventData.photo}
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to={"/event"}>
              <Button btnText="Next" onClick={storeEventData} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
