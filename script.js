function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

const destinations = [
  "Gateway of India",
  "Marine Drive",
  "Chhatrapati Shivaji Maharaj Terminus",
  "Colaba Causeway",
  "Elephanta Caves"
];

function searchDestination() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const result = destinations.find(place =>
    place.toLowerCase().includes(input)
  );

  const output = result ? `Result: ${result}` : "No destination found.";
  document.getElementById("searchResult").textContent = output;
}

