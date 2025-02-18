function loadVehicleInfo() {
  fetch("http://localhost:3000/cars")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Get the brands (keys of the object)
      const brands = Object.keys(data);

      // Populate the first dropdown (brands)
      let vehicleDropdown = document.getElementById("vehicleDropdown");
      vehicleDropdown.innerHTML =
        "<option selected disabled>Select Vehicle</option>" +
        brands
          .map(
            (brand) =>
              `<option value="${brand}">${brand}</option>`
          )
          .join("");

      // Add event listener to update model dropdown based on selected brand
      vehicleDropdown.addEventListener("change", (event) => {
        const selectedBrand = event.target.value;  // Get selected brand
        updateModelDropdown(data[selectedBrand]);  // Update model dropdown with models for the selected brand
      });
    })
    .catch((error) => console.error("Error loading the JSON:", error));
}

function updateModelDropdown(models) {
  let modelDropdown = document.getElementById("modelDropdown");

  // Clear existing options
  modelDropdown.innerHTML = "<option selected disabled>Select Model</option>";

  // Add new models to the dropdown
  models.forEach((model) => {
    modelDropdown.innerHTML += `<option value="${model}">${model}</option>`;
  });
}

// Call the function to load vehicle info
loadVehicleInfo();
