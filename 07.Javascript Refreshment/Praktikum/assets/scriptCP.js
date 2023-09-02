// Pengambilan Elemen
const inputName = document.querySelector(".pn input");
const choiceCategory = document.querySelector(".pc select");
const radios1 = document.getElementById("or1");
const radios2 = document.getElementById("or2");
const radios3 = document.getElementById("or3");
const imageFile = document.getElementById("imgProd");
const inputDesc = document.getElementById("textDesc");
const inputPrice = document.querySelector(".ppr input");

// Pengambilan Elemen Error
const nameError = document.getElementById("nameError");
const categoryError = document.getElementById("categoryError");
const freshnessError = document.getElementById("freshnessError");
const fileError = document.getElementById("fileError");
const descError = document.getElementById("descError");
const priceError = document.getElementById("priceError");
const submitButton = document.getElementById("submitButton");

// Event Listener untuk Validasi RealTime
inputName.addEventListener("input", validateWeb);
choiceCategory.addEventListener("change", validateWeb);
radios1.addEventListener("input", validateWeb);
radios2.addEventListener("input", validateWeb);
radios3.addEventListener("input", validateWeb);
imageFile.addEventListener("input", validateWeb);
inputDesc.addEventListener("input", validateWeb);
inputPrice.addEventListener("input", validateWeb);

// Event Listener untuk menampilkan data di alert
submitButton.addEventListener("click", function () {
    validateWeb();

    // Jika Valid, Data akan tampil di Alert
    if (!submitButton.disabled) {
        tampilAlert();
    }
});

// Menampilkan data di alert
function tampilAlert() {
    const formData = {
        "Product Name": inputName.value,
        "Product Category": choiceCategory.value,
        "Product Freshness": radios1.checked
            ? "Brand New"
            : radios2.checked
            ? "Second Hand"
            : "Refurbished",
        "Image File": imageFile.value,
        "Additional Description": inputDesc.value,
        "Product Price": inputPrice.value,
    };

    let iniAlert = "Data yang telah diisi:\n";
    for (const key in formData) {
        iniAlert += `${key}: ${formData[key]}\n`;
    }

    alert(iniAlert);
}

// Jika Form tidak lengkap, akan Nonaktifkan Submit
function validateWeb() {
    let valid = true;

    // Filter Product Name
    if (inputName.value.length > 25) {
        nameError.textContent = "Name must not exceed 25 characters";
        valid = false;
    } else if (inputName.value.trim() === "") {
        nameError.textContent = "Please enter a valid Product name";
        valid = false;
    } else if (/[#@{}]/.test(inputName.value)) {
        nameError.textContent = "Name must not contain symbols";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Filter Product Category
    if (choiceCategory.value.trim() === "") {
        categoryError.textContent = "Category must be selected";
        valid = false;
    } else {
        categoryError.textContent = "";
    }

    // Filter Product Freshness
    if (!radios1.checked && !radios2.checked && !radios3.checked) {
        freshnessError.textContent = "Select a Product Freshness option";
        valid = false;
    } else {
        freshnessError.textContent = "";
    }

    // Filter Image File
    if (imageFile.value === "") {
        fileError.textContent = "Please insert a picture";
        valid = false;
    } else {
        fileError.textContent = "";
    }

    // Filter Description
    if (inputDesc.value === "") {
        descError.textContent = "Please enter a description";
        valid = false;
    } else {
        descError.textContent = "";
    }

    // Filter Input Price
    if (inputPrice.value.trim() === "") {
        priceError.textContent = "Please enter a valid Price";
        valid = false;
    } else {
        priceError.textContent = "";
    }

    submitButton.disabled = !valid;
}