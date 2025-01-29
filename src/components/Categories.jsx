import { Link } from 'react-router-dom';
import category1 from "../../src/assets/category-1.jpg";
import category2 from "../../src/assets/category-2.jpg";
import category3 from "../../src/assets/category-3.jpg";
import category4 from "../../src/assets/category-4.png";
import category5 from '../../src/assets/computers.jpg';

const Categories = () => {
    const categories = [
        { 
            name: "Security", 
            path: "security", 
            image: category1, 
            description: "Protect your home or business with top-notch security systems."
        },
        { 
            name: "Communication", 
            path: "communication", 
            image: category2, 
            description: "Stay connected with the best communication devices and systems."
        },
        { 
            name: "Displays", 
            path: "displays", 
            image: category3, 
            description: "Explore a wide range of display solutions for every need."
        },
        { 
            name: "Solution", 
            path: "solution", 
            image: category4, 
            description: "Find tailored solutions for your business and personal needs."
        },
        { 
            name: "Computers", 
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
                                to={`/categories/${category.path}`} 
                                className="category-card"
                            >
                                <div className="category-image-container">
                                    <img 
                                        src={category.image} 
                                        alt={category.name} 
                                        className="category-image"
                                    />
                                    <div className="overlay"></div>
                                </div>
                                <div className="category-details">
                                    <h4 className="category-name">{category.name}</h4>
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
