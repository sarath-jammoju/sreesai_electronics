// import { useEffect, useState } from 'react';
// import products from '../../data/product.json';
// import { useParams } from 'react-router-dom';
// import ProductsCards from '../../pages/Shop/ProductsCards';
// import ServiceCarousel from '../../components/serviceCarousel';

// const CategoryPage = () => {
//     const { categoryname } = useParams(); // Get category name from URL
//     const [filterProducts, setFilterProducts] = useState([]);
//     const [categoryDescription, setCategoryDescription] = useState('');
//     const [categoryImage, setCategoryImage] = useState(null);

//     // Define a mapping of category names to descriptions and images
//     const categoryDetails = {
//         security: {
//             description: "Protect your home or business with top-notch security systems.",
//             image: "https://getsafeandsound.com/wp-content/uploads/2021/02/edge-analytics-video-surveillance.jpg",  // External image URL for 'security'
//         },
//         communication: {
//             description: "Stay connected with the best communication devices and systems.",
//             image: "/images/communication.jpg",
//         },
//         displays: {
//             description: "Explore a wide range of display solutions for every need.",
//             image: "/images/displays.jpg",
//         },
//         solution: {
//             description: "Find tailored solutions for your business and personal needs.",
//             image: "/images/solution.jpg",
//         },
//         computers: {
//             description: "Discover powerful computers and accessories for all your tasks.",
//             image: "/images/computers.jpg",
//         },
//     };

//     useEffect(() => {
//         if (categoryname) {
//             // Filter products based on category only if categoryname is defined
//             const filtered = products.filter(
//                 (product) => product.category.toLowerCase() === categoryname.toLowerCase()
//             );
//             setFilterProducts(filtered);

//             // Set category description and image based on category name
//             const details = categoryDetails[categoryname.toLowerCase()];
//             setCategoryDescription(details ? details.description : "No description available for this category.");
//             const categoryImage = details ? details.image : null;
//             setCategoryImage(categoryImage);
//         } else {
//             console.log("Categoryname is undefined or empty.");
//         }
//     }, [categoryname]);

//     // Style object for the background image
//     const backgroundStyle = categoryImage ? {
//         backgroundImage: `url(${categoryImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '400px',  // Adjust as needed
//     } : {};

//     return (
//         <>
//             <section className='section__container bg-primary-light' style={backgroundStyle}>
//                 <h2 className='section__header capitalize mt-24'>{categoryname || "Category"}</h2>
//                 <p className="text-xl text-center">{categoryDescription}</p>
//             </section>
            
//             {/* Carousel Section */}
//             <ServiceCarousel categoryname={categoryname} /> {/* Pass categoryname to Carousel */}

//             {/* Product Cards Section */}
//             <div className="section__container">
//                 <ProductsCards products={filterProducts} />
//             </div>

//         </>
//     );
// };

// export default CategoryPage;



import { useEffect, useState } from 'react';
import products from '../../data/product.json';
import { useParams } from 'react-router-dom';
import ProductsCards from '../../pages/Shop/ProductsCards';
import ServiceCarousel from '../../components/serviceCarousel';

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
            image: "/images/communication.jpg",
        },
        displays: {
            description: "Explore a wide range of display solutions for every need.",
            image: "/images/displays.jpg",
        },
        solution: {
            description: "Find tailored solutions for your business and personal needs.",
            image: "/images/solution.jpg",
        },
        computers: {
            description: "Discover powerful computers and accessories for all your tasks.",
            image: "/images/computers.jpg",
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
        height: '400px',  // Adjust as needed
    } : {};

    
    console.log(categoryDescription);
    
    
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




