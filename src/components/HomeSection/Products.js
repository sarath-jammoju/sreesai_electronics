import { Link } from 'react-router-dom';
import category1 from "../../assets/home/Products/category-1.webp"
import category2 from "../../assets/home/Products/category-2.webp"
import category3 from "../../assets/home/Products/category-3.webp"
import category4 from "../../assets/home/Products/category-4.webp"
import category5 from "../../assets/home/Products/category-5.webp"


const Categories = () => {
    const categories = [
        { 
            name: "security", 
            path: "security", 
            image: category1, 
            description: "Protect your home or business with top-notch security systems."
        },
        { 
            name: "communication", 
            path: "communication", 
            image: category2, 
            description: "Stay connected with the best communication devices and systems."
        },
        { 
            name: "displays", 
            path: "displays", 
            image: category3, 
            description: "Explore a wide range of display solutions for every need."
        },
        { 
            name: "solution", 
            path: "solution", 
            image: category4, 
            description: "Find tailored solutions for your business and personal needs."
        },
        { 
            name: "computers", 
            path: "computers", 
            image: category5,
            description: "Discover powerful computers and accessories for all your tasks."
        }
    ];

    return (
        <section className="categories-section">
            <h2 className="products-header">Explore Our Categories</h2>
            <div className="categories-container">
                {
                    categories.map((category) => {
                        return (
                            <Link 
                                key={category.name} 
                                to={`/services/${category.path}`} 
                                className="category-card"
                            >
                                <div className="category-image-container">
                                    <img 
                                        src={category.image} 
                                        alt={category.name} 
                                        className="category-image"
                                    />
                                    
                                </div>
                                <div className="category-details">
                                    <h4 className="category-name">{category.name}</h4>
                                    <p className="category-description">{category.description}</p>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Categories;
