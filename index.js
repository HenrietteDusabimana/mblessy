// Reusable Fetch Function
async function fetch(url, method, body) {
  if (method === "POST") {
    try {
      const request = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await request.json();

      return response;
    } catch (e) {
      console.log("Error: " + e);
    }
  } else if (method === "GET") {
    try {
      const request = await fetch(url);
      const response = await request.json();

      return response;
    } catch (e) {
      console.log("Error: " + e);
    }
  }
}

// Logs true when site is fully loaded
function subscriptionRequest() {
  const url = "https://safinewsletter.herokuapp.com/subscribe";
  fetch(url, "POST", document.getElementById("name").value);
  alert(
    document.getElementById("name").value +
      " " +
      document.getElementById("email").value
  );
}
