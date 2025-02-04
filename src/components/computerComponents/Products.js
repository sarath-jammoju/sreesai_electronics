import React, { Fragment } from "react";
import accessories from "../../assets/coumputerAssets/products/accessories.webp";
import acer_laptop from "../../assets/coumputerAssets/products/acer_laptop.webp";
import asus_laptop from "../../assets/coumputerAssets/products/asus_monitor.webp"
import canon_printer from "../../assets/coumputerAssets/products/canon_printer.webp"
import dell_laptop from "../../assets/coumputerAssets/products/dell_laptoo.webp"
import desktop from "../../assets/coumputerAssets/products/desktop.webp"
import epson_printer from "../../assets/coumputerAssets/products/epson_printer.webp"
import epson_printer2 from "../../assets/coumputerAssets/products/epson_printer2.webp"
import hp_laptop from "../../assets/coumputerAssets/products/hp_laptop.webp"
import hp_monitor from "../../assets/coumputerAssets/products/hp_monitor.webp"
import spare_parts from "../../assets/coumputerAssets/products/spare_parts.webp"
import xerox_machine from "../../assets/coumputerAssets/products/xerox_machine.webp"

const Products = () => {
  const products = [
    {
      image: hp_laptop,
      title: "HP Laptop",
      description:
        "A high-performance laptop for work and play. Built with the latest technology, it offers smooth multitasking and long-lasting battery life.",
    },
    {
      image: dell_laptop,
      title: "Dell Laptop",
      description:
        "Reliable and powerful for all your needs. Designed for professionals and students, it features a sleek design and advanced security features.",
    },
    {
      image: acer_laptop,
      title: "Acer Laptop",
      description:
        "A budget-friendly option for everyday tasks. Ideal for students and casual users, offering a great balance of performance and affordability.",
    },
    {
      image: asus_laptop,
      title: "Asus Laptop",
      description:
        "Sleek design with excellent performance. Equipped with a high-speed processor and immersive display for an outstanding user experience.",
    },
    {
      image: hp_monitor,
      title: "HP Monitor",
      description:
        "A crisp and vibrant display for your work. Features Full HD resolution and an ergonomic design for a comfortable viewing experience.",
    },
    {
      image: desktop,
      title: "Desktop",
      description:
        "A robust and efficient desktop for professionals. Powerful hardware ensures smooth operation, perfect for both office and creative work.",
    },
    {
      image: accessories,
      title: "Accessories",
      description:
        "The best accessories for your tech. From keyboards to external storage, enhance your setup with top-quality gadgets.",
    },
    {
      image: canon_printer,
      title: "Canon Printer",
      description:
        "Print high-quality documents with ease. Delivers fast and clear prints, making it an excellent choice for both home and office use.",
    },
    {
      image: epson_printer,
      title: "Epson Printer",
      description:
        "Efficient printing for both home and office. Energy-efficient and equipped with wireless printing for ultimate convenience.",
    },
    {
      image: epson_printer2,
      title: "Epson Printer 2",
      description:
        "Compact printer with fast performance. Designed for high-volume printing with minimal maintenance required.",
    },
    {
      image: xerox_machine,
      title: "Xerox Machine",
      description:
        "Ideal for high-volume printing and copying. A reliable solution for businesses that need fast and efficient document reproduction.",
    },
    {
      image: spare_parts,
      title: "Spare Parts",
      description:
        "Original parts to keep your devices running. Ensure optimal performance with high-quality, genuine replacement components.",
    },
  ];

  return (
    <Fragment>
      <h2 className="product-heading">Our Products</h2>
      <div className="product-cards-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>{product.description.slice(0,120)}</h4>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Products;