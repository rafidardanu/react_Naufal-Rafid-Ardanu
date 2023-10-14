import { useState, useEffect } from "react";
import article from "./Article";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormTable() {
  const [inputName, setInputName] = useState("");
  const [productCategory, setProductCategory] = useState("Choice");
  const [productFreshness, setProductFreshness] = useState("");
  const [imageOfProduct, setImageOfProduct] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [freshnessError, setFreshnessError] = useState("");
  const [imageError, setImageError] = useState("");
  const [descError, setDescError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const navigate = useNavigate();
  
  const handleNameChange = (e) => {
    const value = e.target.value;
    setInputName(value);
    const nameRegex = /^[A-Za-z0-9\s]+$/; // Regex nama produk (alfabet, angka, dan spasi)
    if (!nameRegex.test(value)) {
      setNameError("Name must only contain letters, numbers, and spaces");
    } else if (value.length > 10) {
      setNameError("Name must not exceed 10 characters");
    } else {
      setNameError("");
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setProductCategory(value);
    if (value === "Choice") {
      setCategoryError("Category must be selected");
    } else {
      setCategoryError("");
    }
  };

  const handleFreshnessChange = (e) => {
    const value = e.target.value;
    setProductFreshness(value);
    setFreshnessError("");
  };

  const handleImageChange = (e) => {
    const value = e.target.value;
    setImageOfProduct(value);
    if (value.trim() === "") {
      setImageError("Please insert a picture");
    } else {
      setImageError("");
    }
  };

  const handleDescChange = (e) => {
    const value = e.target.value;
    setAdditionalDescription(value);
    if (value.trim() === "") {
      setDescError("Please enter a description");
    } else {
      setDescError("");
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setInputPrice(value);
    const priceRegex = /^\d+$/; // Regex angka positif
    if (!priceRegex.test(value)) {
      setPriceError("Please enter a valid Price");
    } else {
      setPriceError("");
    }
  };

  const isFormValid = () => {
    return (
      inputName.trim() !== "" &&
      productCategory.trim() !== "" &&
      productFreshness !== "" &&
      imageOfProduct.trim() !== "" &&
      additionalDescription.trim() !== "" &&
      inputPrice!== "" &&
      !nameError &&
      !categoryError &&
      !freshnessError &&
      !imageError &&
      !descError &&
      !priceError
    );
  };

  const getDataFromAPI = async () => {
    try {
      const apiUrl = "https://651b9f60194f77f2a5ae9f3f.mockapi.io/product";
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        console.log("Data berhasil diambil:", response.data);
        setProducts(response.data);
      } else {
        console.error("Gagal mengambil data:", response.data);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const editProduct = (product) => {
    setEditingProduct(product);
    setInputName(product.name);
    setProductCategory(product.category);
    setProductFreshness(product.freshness);
    setImageOfProduct(product.image);
    setAdditionalDescription(product.description);
    setInputPrice(product.price);
  };

  const updateProduct = async (productId) => {
    if (!isFormValid()) {
      return;
    }
    const updatedData = {
      name: inputName,
      category: productCategory,
      freshness: productFreshness,
      image: imageOfProduct,
      description: additionalDescription,
      price: inputPrice,
    };
    try {
      const apiUrl = `https://651b9f60194f77f2a5ae9f3f.mockapi.io/product/${productId}`;
      const response = await axios.put(apiUrl, updatedData);
      if (response.status === 200) {
        console.log("Data berhasil diperbarui di API:", response.data);
        const updatedProducts = products.map((product) =>
          product.number === productId ? { ...product, ...updatedData } : product
        );
        setProducts(updatedProducts);
        setEditingProduct(null);
        setInputName("");
        setProductCategory("");
        setProductFreshness("");
        setImageOfProduct("");
        setAdditionalDescription("");
        setInputPrice("");
      } else {
        console.error("Gagal memperbarui data di API:", response.data);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const validateWeb = async () => {
    if (!isFormValid()) {
      return;
    }

    const newData = {
      name: inputName,
      category: productCategory,
      freshness: productFreshness,
      image: imageOfProduct,
      description: additionalDescription,
      price: inputPrice,
    };

    try {
      // Kirim data ke mock API menggunakan Axios
      const response = await axios.post(
        "https://651b9f60194f77f2a5ae9f3f.mockapi.io/product",
        newData
      );

      if (response.status === 201) {
        setProducts([...products, response.data]);
        setInputName("");
        setInputPrice("");
        setProductCategory("");
        setProductFreshness("");
        setImageOfProduct("");
        setAdditionalDescription("");
        console.log("Data Berhasil terkirim ke API:", response.data);
      }
    } catch (error) {
      console.error("Error adding data to API:", error);
    }

    // Mencari nomor terbesar dari produk yang ada
    let maxProductNumber = 0;
    products.forEach((product) => {
      const productNumberInt = parseInt(product.number);
      if (!isNaN(productNumberInt) && productNumberInt > maxProductNumber) {
        maxProductNumber = productNumberInt;
      }
    });

    // Menambahkan produk ke dalam array produk dengan nomor yang sesuai
    const newProductNumber = maxProductNumber + 1;
    const newProduct = {
      name: inputName,
      category: productCategory,
      freshness: productFreshness,
      image: imageOfProduct,
      description: additionalDescription,
      price: inputPrice,
      number: `${newProductNumber}`,
    };
    setProducts([...products, newProduct]);

    // Mengosongkan input setelah produk ditambahkan
    setInputName("");
    setInputPrice("");
    setProductCategory("");
    setProductFreshness("");
    setImageOfProduct("");
    setAdditionalDescription("");
    window.alert(
      `Data yang telah terisi:\nProduct Name: ${newProduct.name}\nProduct Category: ${newProduct.category}\nProduct Freshness: ${newProduct.freshness}\nImage of Product: ${newProduct.image}\nAdditional Description: ${newProduct.description}\nProduct Price: ${newProduct.price}`
    );
  };

  // Menampilkan Random Number
  const RandomNumberLog = () => {
    const randomNumber = Math.random();
    console.log("Random Number:", randomNumber);
  };

  // mengganti bahasa
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  // // Menampilkan Alert "welcome"
  // useEffect(() => {
  //     alert('Welcome');
  // }, []);

  const deleteProductFromAPI = async (productId) => {
    try {
      const apiUrl = `https://651b9f60194f77f2a5ae9f3f.mockapi.io/product/${productId}`;
      console.log("Deleting product with ID:", productId);
      const response = await axios.delete(apiUrl);

      if (response.status === 200) {
        console.log("Data berhasil dihapus dari API");
        setProducts(products.filter((product) => product.number !== productId));
      } else {
        console.error("Gagal menghapus data dari API:", response.data);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const confirmDeleteList = (productId) => {
    const confirmDelete = window.confirm("Yakin menghapus?");
    if (confirmDelete) {
      deleteProductFromAPI(productId);
    }
  };

  // Navigate ProductDetail
  const handleDetailClick = (productId) => {
    console.log(products);
    navigate(`/CProduct/${productId}`);
  };

  const addToLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  const setFromLocalStorage = () => {
    const productsDB = JSON.parse(localStorage.getItem("products"));
    if (productsDB) {
      setProducts([...productsDB]);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      addToLocalStorage();
    }
  }, [products]);

  useEffect(() => {
    setFromLocalStorage();
  }, []);

return (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <div className="main-content text-center">
          <img src="logobs.png" alt="logo" />
          <h1>{article.title[language]}</h1>
          <p>{article.description[language]}</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleLanguage}
          >
            Language
          </button>
        </div>
        <div className="form-cp mb-3">
          <div>
            <h2>Detail Product</h2>
          </div>
          <div className="prodName mb-3">
            <label>
              Product Name:<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              pattern=".{1,10}"
              required=""
              value={inputName}
              onChange={handleNameChange}
            />
            <span className="text-danger">{nameError}</span>
          </div>
          <div className="prodCategory mb-3">
            <label>
              Product Category:<span className="required">*</span>
            </label>
            <select
              className="form-select"
              value={productCategory}
              onChange={handleCategoryChange}
            >
              <option disabled="" value="Choice">
                Choice
              </option>
              <option value="Electronic">Electronic</option>
              <option value="Fashion">Fashion</option>
              <option value="Foods">Foods</option>
              <option value="Home Appliances">Home Appliances</option>
              <option value="Kids">Kids & Baby</option>
            </select>
            <span className="text-danger">{categoryError}</span>
          </div>
          <div className="prodFreshness mb-3">
            <label className="form-label">
              Product Freshness:<span className="required">*</span>
            </label>
            <br />
            <input
              id="or1"
              className="form-check-input"
              type="radio"
              name="Freshness"
              value="Brand New"
              onChange={handleFreshnessChange}
              checked={productFreshness === "Brand New"}
            />
            <label htmlFor="" className="form-check-label ps-2">
              Brand New
            </label>
            <br />
            <input
              id="or2"
              className="form-check-input"
              type="radio"
              name="Freshness"
              value="Second Hand"
              onChange={handleFreshnessChange}
              checked={productFreshness === "Second Hand"}
            />
            <label htmlFor="" className="form-check-label ps-2">
              Second Hand
            </label>
            <br />
            <input
              id="or3"
              className="form-check-input"
              type="radio"
              name="Freshness"
              value="Refurbished"
              onChange={handleFreshnessChange}
              checked={productFreshness === "Refurbished"}
            />
            <label htmlFor="" className="form-check-label ps-2">
              Refurbished
            </label>
            <br />
            <span className="text-danger">{freshnessError}</span>
          </div>
          <div className="divImgProd mb-3">
            <label htmlFor="formFile" className="form-label">
              Image of Product<span className="required">*</span>
            </label>
            <input
              id="imgProd"
              className="form-control"
              type="file"
              required=""
              onChange={handleImageChange}
            />
            <span className="text-danger">{imageError}</span>
          </div>
          <div className="addDesc mb-3">
            <label>
              Additional Description:<span className="required">*</span>
            </label>
            <textarea
              id="textDesc"
              className="form-control"
              required=""
              value={additionalDescription}
              onChange={handleDescChange}
            />
            <span className="text-danger">{descError}</span>
          </div>
          <div className="prodPrice mb-3">
            <label className="form-label">
              Product Price:<span className="required">*</span>
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="$1"
              pattern="\d+"
              required=""
              value={inputPrice}
              onChange={handlePriceChange}
            />
            <span className="text-danger">{priceError}</span>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto mt-5">
            <button
              type="button"
              id="submitButton"
              className="btn btn-primary"
              onClick={
                editingProduct
                  ? () => updateProduct(editingProduct.number)
                  : validateWeb
              }
              disabled={!isFormValid()}
            >
              {editingProduct ? "Update" : "Submit"}
            </button>
            {/* Tombol yang memanggil fungsi saat diklik */}
            <button
              type="button"
              className="btn btn-danger"
              onClick={RandomNumberLog}
            >
              Random Number
            </button>
          </div>
        </div>
      </div>
    </div>
    <section className="mt-5 tabel">
      <h3 style={{ textAlign: "center", color: "black" }}>List Product</h3>
      <table className="form div table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Image of Product</th>
            <th>Additional Description</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.number}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.freshness}</td>
              <td>{product.image}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => confirmDeleteList(product.number)}
                  >
                    Delete
                  </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleDetailClick(product.number)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </div>
);
}

export default FormTable;
