import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";

const CreateEvent = () => {
  const [data, setData] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    photo: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log({ name }, { value });

    setData({ ...data, [name]: value });
    console.log(data);
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
              value={data.eventName}
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
              value={data.hostName}
            />
          </div>
          <div className="mb-4">
            <Label labelText="Start Date" labelFor="startdate" />
            <Input
              id="startdate"
              type="datetime-local"
              name="startDate"
              onChange={handleInputChange}
              value={data.eventStart}
            />
          </div>
          <div className="mb-4">
            <Label labelText="End Date" labelFor="enddate" />
            <Input
              id="enddate"
              type="datetime-local"
              name="endDate"
              onChange={handleInputChange}
              value={data.eventEnd}
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
              value={data.locationName}
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
              value={data.photo}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button btnText="Next" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
