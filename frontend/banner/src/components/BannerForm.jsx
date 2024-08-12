import React, { useCallback } from "react";
import { useState } from "react";
import InputField from "./component/InputField";
function BannerForm() {
  const [inputs, setInputs] = useState({
    description: "",
    link: "",
    day: 0,
    hour:0,
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

      // Convert time into seconds if necessary
      const totalSeconds =
        Number(inputs.day) * 86400 +
        Number(inputs.minute) * 60 +
        Number(inputs.second);

      // Prepare data to send to the backend
      const bannerData = {
        description: inputs.description,
        link: inputs.link,
        timer: totalSeconds, // Store time as total seconds
      };

      console.log(bannerData);
      // Example: Send data to the backend (using fetch or axios)
      // fetch('/api/banner', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(bannerData),
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('Success:', data);
      //     // Handle success (e.g., show a message, reset form, etc.)
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //     // Handle error (e.g., show an error message)
      //   });
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
          value={inputs.link} // <- Binding the description value to the input field
          onChange={handleInputs}
        />
        <InputField
          label="Day"
          name="day"
          type="number"
          value={inputs.day} // <- Binding the description value to the input field
          onChange={handleInputs}
        />
         <InputField
          label="Hour"
          name="hour"
          type="number"
          value={inputs.hour} // <- Binding the description value to the input field
          onChange={handleInputs}
        />
        <InputField
          label="Minute"
          name="minute"
          type="number"
          value={inputs.minute} // <- Binding the description value to the input field
          onChange={handleInputs}
        />
        <InputField
          label="Second"
          name="second"
          type="number"
          value={inputs.second} // <- Binding the description value to the input field
          onChange={handleInputs}
        />
        <a class="flex   items-center gap-2" href="/">
          <svg
            width="125"
            height="26"
            viewBox="0 0 135 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5.89409H15.3693L9.5331 36H21.8368L27.2126 5.89409H42.2511L43.4131 0H1.17165L0 5.89409Z"
              fill="#D41F30"
            ></path>
            <path
              d="M47.2951 0L42.512 26.9438L49.9857 36H82.8746L89.1533 0H77.1198L71.8129 30.008H56.8626L54.4711 27.0927L59.1053 0H47.2951Z"
              fill="#D41F30"
            ></path>
            <path
              d="M86.9282 36H98.7784L100.699 23.9651H130.691L131.882 17.9993H101.825L103.214 8.93625L106.724 5.82379H122.018L120.826 11.9812H132.81L134.929 0H102.156L91.6286 9.00241L86.9282 36Z"
              fill="#D41F30"
            ></path>
          </svg>
        </a>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BannerForm;
