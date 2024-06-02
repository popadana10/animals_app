import { Link } from "react-router-dom";

const Home = () => {
    const categories = [
        { name: "Animals", url: "/animals", imgCategory: "mammal" },
        { name: "Birds", url: "/birds", imgCategory: "bird" },
        { name: "Insects", url: "/insects", imgCategory: "insect" },
        { name: "Fishes", url: "/fishes", imgCategory: "fish" }
    ];

    return (
        <div id="HomePage">
            <div className="row">
                {categories.map(category => (
                    <div key={category.name}>
                        <Link to={category.url} className="hplink">
                            {category.name}
                        </Link>
                        <img
                            src={`https://source.unsplash.com/random/600x600/?${category.imgCategory}`}
                            alt={`Photo of a ${category.imgCategory}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

