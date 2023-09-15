// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import article from './article';

function FormTable() {
const [inputName, setInputName] = useState('');
const [productCategory, setProductCategory] = useState('');
const [productFreshness, setProductFreshness] = useState('');
const [imageOfProduct, setImageOfProduct] = useState('');
const [additionalDescription, setAdditionalDescription] = useState('');
const [inputPrice, setInputPrice] = useState('');

const [nameError, setNameError] = useState('');
const [categoryError, setCategoryError] = useState('');
const [freshnessError, setFreshnessError] = useState('');
const [imageError, setImageError] = useState('');
const [descError, setDescError] = useState('');
const [priceError, setPriceError] = useState('');
const [products, setProducts] = useState([]); // State untuk menyimpan produk

const handleNameChange = (e) => {
    const value = e.target.value;
    setInputName(value);

    if (value.trim() === '') {
    setNameError('Please enter a valid Product name');
    } else if (value.length > 10) {
    setNameError('Name must not exceed 10 characters');
    } else if (/[!@#{}]/.test(value)) {
    setNameError('Name must not contain symbols');
    } else {
    setNameError('');
    }
};

const handleCategoryChange = (e) => {
    const value = e.target.value;
    setProductCategory(value);
    if (value === 'Choice') {
    setCategoryError('Category must be selected');
    } else {
    setCategoryError('');
    }
};

const handleFreshnessChange = (e) => {
    const value = e.target.value;
    setProductFreshness(value);
    setFreshnessError('');
};

const handleImageChange = (e) => {
    const value = e.target.value;
    setImageOfProduct(value);

    if (value.trim() === '') {
    setImageError('Please insert a picture');
    } else {
    setImageError('');
    }
};

const handleDescChange = (e) => {
    const value = e.target.value;
    setAdditionalDescription(value);

    if (value.trim() === '') {
    setDescError('Please enter a description');
    } else {
    setDescError('');
    }
};

const handlePriceChange = (e) => {
    const value = e.target.value;
    setInputPrice(value);

    if (value.trim() === '') {
    setPriceError('Please enter a valid Price');
    } else {
    setPriceError('');
    }
};

const isFormValid = () => {
    return (
    inputName.trim() !== '' &&
    productCategory.trim() !== '' &&
    productFreshness !== '' &&
    imageOfProduct.trim() !== '' &&
    additionalDescription.trim() !== '' &&
    inputPrice.trim() !== '' &&
    !nameError &&
    !categoryError &&
    !freshnessError &&
    !imageError &&
    !descError &&
    !priceError
    );
};

const validateWeb = () => {
    if (!isFormValid()) {
      // Jika form tidak valid, jangan lanjutkan
    return;
    }

    // Menambahkan produk ke dalam array produk
    const newProduct = {
    name: inputName,
    category: productCategory,
    freshness: productFreshness,
    image: imageOfProduct,
    description: additionalDescription,
    price: inputPrice,
    };
    setProducts([...products, newProduct]);

    // Mengosongkan input setelah produk ditambahkan
    setInputName('');
    setInputPrice('');
    setProductCategory('');
    setProductFreshness('');
    setImageOfProduct('');
    setAdditionalDescription('');

    window.alert(
    `Data yang telah terisi:\nProduct Name: ${newProduct.name}\nProduct Category: ${newProduct.category}\nProduct Freshness: ${newProduct.freshness}\nImage of Product: ${newProduct.image}\nAdditional Description: ${newProduct.description}\nProduct Price: ${newProduct.price}`
    );
};

// Menampilkan Random Number
const RandomNumberLog = () => {
    const randomNumber = Math.random();
    console.log('Random Number:', randomNumber);
};
// const RandomNumberLog = () => {
//     const randomNumber = Math.floor(Math.random() * 100); // Angka acak antara 0 hingga 99
//     console.log('Random Number:', randomNumber);
// };

const [language, setLanguage] = useState('en'); // State untuk bahasa, default bahasa Inggris (en)

  // mengganti bahasa
const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
};

return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-9">
        <div className="main-content text-center">
            <img src="logobs.png" alt="logo" />
            <h1>{article.title[language]}</h1>
            <p>{article.description[language]}</p>
        <button type="button" className="btn btn-secondary" onClick={toggleLanguage}>Language</button>
        </div>
        <div className="form mb-3">
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
                <option disabled="" value="Choice">Choice</option>
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
                checked={productFreshness === 'Brand New'}
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
                checked={productFreshness === 'Second Hand'}
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
                checked={productFreshness === 'Refurbished'}
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
                value={imageOfProduct}
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
                onClick={validateWeb}
                disabled={!isFormValid()} // Menonaktifkan tombol jika form tidak valid
            >
                Submit
            </button>
            {/* Tombol yang memanggil fungsi saat diklik */}
            <button type="button" className="btn btn-danger" onClick={RandomNumberLog}>Random Number</button>
            </div>
        </div>
        </div>
    </div>
    <section className="mt-5 tabel">
        <h3 style={{ textAlign: "center", color: "black" }}>List Product</h3>
        <table className="form div table table-bordered table-striped table-hover">
        <thead>
            <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Image of Product</th>
            <th>Additional Description</th>
            <th>Product Price</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index) => (
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.freshness}</td>
                <td>{product.image}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </section>
    </div>
);
}

export default FormTable;