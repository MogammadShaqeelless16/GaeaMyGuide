chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "prompt") {
      const { prompt } = message;
      // Simulate calling Chrome's AI API (replace this with actual API code when available)
      setTimeout(() => {
        const mockResponse = `Eco-friendly activities near you: 
        1. Visit the Greenway Park.
        2. Shop at the Farmer’s Market.
        3. Take a nature hike at Blue Ridge Trail.`;
        sendResponse({ output: mockResponse });
      }, 1000);
      return true; // Keep the message channel open for async response.
    }
  });
  