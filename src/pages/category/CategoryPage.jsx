import { useEffect, useState } from 'react';
import products from '../../data/product.json';
import { useParams } from 'react-router-dom';
import ProductsCards from '../../pages/Shop/ProductsCards';
import ServiceCarousel from '../../components/serviceCarousel';
import display from '../../assets/display.png'
import solution from '../../assets/solution.jpeg'

const CategoryPage = () => {
    const { categoryname } = useParams(); // Get category name from URL
    const [filterProducts, setFilterProducts] = useState([]);
    const [categoryDescription, setCategoryDescription] = useState('');
    const [categoryImage, setCategoryImage] = useState(null);

    // Define a mapping of category names to descriptions and images
    const categoryDetails = {
        security: {
            description: "Protect your home or business with top-notch security systems.",
            image: "https://getsafeandsound.com/wp-content/uploads/2021/02/edge-analytics-video-surveillance.jpg",  // External image URL for 'security'
        },
        communication: {
            description: "Stay connected with the best communication devices and systems.",
            image: "https://img.freepik.com/free-photo/finger-touching-phone-with-wifi_1134-224.jpg",
        },
        displays: {
            description: "Explore a wide range of display solutions for every need.",
            image: "https://prodisplay.com/wp-content/uploads/2023/05/5.5m-x-2m-Large-Format-Indoor-LED-Screen-1024x768.jpg",
        },
        solutions: {
            description: "Find tailored solutions for your business and personal needs.",
            image: "https://www.itctech.com.cn/Public/upload/2021-04-23/1619146879.9977_wm_591.jpg",
        },
        computers: {
            description: "Discover powerful computers and accessories for all your tasks.",
            image: "https://img.freepik.com/premium-photo/flat-lay-desktop-with-laptop-mouse_23-2148397918.jpg",
        },
    };

    useEffect(() => {
        if (categoryname) {
            // Filter products based on category only if categoryname is defined
            const filtered = products.filter(
                (product) => product.category.toLowerCase() === categoryname.toLowerCase()
            );
            setFilterProducts(filtered);

            // Set category description and image based on category name
            const details = categoryDetails[categoryname.toLowerCase()];
            setCategoryDescription(details ? details.description : "No description available for this category.");
            const categoryImage = details ? details.image : null;
            setCategoryImage(categoryImage);
        } else {
            console.log("Categoryname is undefined or empty.");
        }
    }, [categoryname]);

    // Style object for the background image
    const backgroundStyle = categoryImage ? {
        backgroundImage: `url(${categoryImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',  // Adjust as needed
        
    } : {};

    
   return (
        <>
            <section className="category-section" style={backgroundStyle}>
                <h2 className="category-header">{categoryname || "Category"}</h2>
                <p className="category-description">{categoryDescription}</p>
            </section>
                {/* <p className="category-description">Protect your home or business with top-notch security systems.</p> */}
            
            {/* Carousel Section */}
            <ServiceCarousel categoryname={categoryname} /> {/* Pass categoryname to Carousel */}

            {/* Product Cards Section */}
            <div className="products-section">
                <ProductsCards products={filterProducts} />
            </div>
        </>
    );
};

export default CategoryPage;




