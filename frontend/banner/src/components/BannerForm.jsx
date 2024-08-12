import React, { useCallback, useState } from "react";
import InputField from "./component/InputField";

function BannerForm() {
  const [inputs, setInputs] = useState({
    description: "",
    link: "",
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  const handleInputs = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // Perform validation if needed
      if (!inputs.description || !inputs.link) {
        alert("Description and Link are required!");
        return;
      }

      // Convert time to endTime in ISO format
      const now = new Date();
      const endTime = new Date(
        now.getTime() + (Number(inputs.day) * 86400 + Number(inputs.hour) * 3600 + Number(inputs.minute) * 60 + Number(inputs.second)) * 1000
      ).toISOString();

      // Prepare data to send to the backend
      const bannerData = {
        description: inputs.description,
        link: inputs.link,
        endTime, // Send endTime in ISO format
        visibility: true // or false based on your logic
      };

      // Send data to the backend
      fetch('http://localhost:5001/banner/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bannerData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // Handle success (e.g., show a message, reset form, etc.)
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error (e.g., show an error message)
        });
    },
    [inputs]
  );

  return (
    <>
      <h1>BannerForm Admin</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Description"
          name="description"
          type="text"
          value={inputs.description} // <- Binding the description value to the input field
          onChange={handleInputs}
        />
        <InputField
          label="Link"
          name="link"
          type="text"
          value={inputs.link} // <- Binding the link value to the input field
          onChange={handleInputs}
        />
        <InputField
          label="Day"
          name="day"
          type="number"
          value={inputs.day} // <- Binding the day value to the input field
          onChange={handleInputs}
        />
        <InputField
          label="Hour"
          name="hour"
          type="number"
          value={inputs.hour} // <- Binding the hour value to the input field
          onChange={handleInputs}
        />
        <InputField
          label="Minute"
          name="minute"
          type="number"
          value={inputs.minute} // <- Binding the minute value to the input field
          onChange={handleInputs}
        />
        <InputField
          label="Second"
          name="second"
          type="number"
          value={inputs.second} // <- Binding the second value to the input field
          onChange={handleInputs}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BannerForm;
