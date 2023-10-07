import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateProduct from './CreateProduct';

test('Input Product Name menerima input teks dan menampilkannya', () => {
  const { getByLabelText, getByText } = render(<CreateProduct />);

  // Temukan input Product Name berdasarkan labelnya
  const productNameInput = getByLabelText('Product Name:*');

  // Ketikkan teks ke dalam input
  fireEvent.change(productNameInput, { target: { value: 'Contoh Produk' } });

  // Temukan tombol Submit
  const submitButton = getByText('Submit');

  // Klik tombol Submit
  fireEvent.click(submitButton);

  // Temukan teks hasil input yang harus ditampilkan di halaman
  const displayedProductName = getByText('Product Name: Contoh Produk');

  // Pastikan bahwa teks yang dimasukkan sesuai dengan teks yang ditampilkan
  expect(displayedProductName).toBeInTheDocument();
});
