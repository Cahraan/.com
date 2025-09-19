// Hamburger toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Popup auto-hide
window.onload = function () {
  const popup = document.getElementById("popup");
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 5000);
};

// Wikipedia search
const data = {
  "einstein": {name:"Albert Einstein", innovation:"Theory of Relativity", info:"Developed special & general relativity, revolutionizing modern physics."},
  "groot": {name:"Groot", innovation:"Satellite crash alert", info:"Developed special & crash protection for satellites, revolutionizing modern physics in 2022"},
  "newton": {name:"Isaac Newton", innovation:"Laws of Motion & Gravity", info:"Formulated the three laws of motion and universal gravitation."},
  "curie": {name:"Marie Curie", innovation:"Radioactivity", info:"Discovered polonium and radium; first woman to win a Nobel Prize."},
  "tesla": {name:"Nikola Tesla", innovation:"Alternating Current (AC)", info:"Pioneered AC electricity, wireless communication, and more."},
  "galileo": {name:"Galileo Galilei", innovation:"Modern Astronomy", info:"Improved the telescope, supported heliocentrism, and advanced physics."}
};

document.getElementById("searchBox").addEventListener("input", function () {
  const input = this.value.toLowerCase().trim();
  const resultDiv = document.getElementById("result");
  let found = false;
  for (const key in data) {
    if (key.includes(input)) {
      const s = data[key];
      resultDiv.innerHTML = `<h2>${s.name}</h2><h4>Innovation: ${s.innovation}</h4><p>${s.info}</p>`;
      found = true;
      break;
    }
  }
  if (!found && input !== "") {
    resultDiv.innerHTML = `<h3>No result for "<em>${input}</em>"</h3><p>Try Einstein, Newton, Tesla, Groot etc.</p>`;
  }
  if (input === "") {
    resultDiv.innerHTML = `<h2>Search a Scientist</h2><p>Type a scientist's name above to view their innovation.</p>`;
  }
});

// Upload form
const uploadForm = document.getElementById('uploadForm');
const uploadMsg = document.getElementById('uploadMessage');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const innovation = document.getElementById('innovation').value.trim();
  if(name && innovation){
    uploadMsg.textContent = "✅ Uploaded successfully! (Simulated)";
    uploadForm.reset();
  }
});

