document.getElementById("findEco").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getEcoActivities(latitude, longitude);
      },
      (error) => {
        document.getElementById("output").innerText =
          "Please allow location access to find eco-friendly activities.";
      }
    );
  });
  
  function getEcoActivities(lat, lon) {
    const prompt = `Suggest eco-friendly activities near (${lat}, ${lon}).`;
    chrome.runtime.sendMessage(
      { type: "prompt", prompt: prompt },
      (response) => {
        document.getElementById("output").innerText = response.output || "No suggestions found.";
      }
    );
  }
  