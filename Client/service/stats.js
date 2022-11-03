function getUserStats(userID) {
  let stats = {};
  const url = "http://localhost:8081/api/stats/user/" + userID;
  const response = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function setStats(userData, setData) {
  console.log(JSON.stringify(userData));
  fetch("http://localhost:8081/api/stats/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((response) => console.log(response.status));

  fetch("http://localhost:8081/api/stats/set", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(setData),
  }).then((response) => console.log(response.status));
}

export { getUserStats, setStats };
