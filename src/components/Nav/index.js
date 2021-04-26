//import React, { useState } from "react";
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    // to update the tab on the browser to reflect the user's category selection
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);
    //const [currentCategory, setCurrentCategory] = useState(categories[0]);
    // const [categories] = useState([
    //     {
    //       name: "commercial",
    //       description: "Photos of grocery stores, food trucks, and other commercial projects"
    //     },
    //     { 
    //         name: "portraits", 
    //         description: "Portraits of people in my life" 
    //     },
    //     { 
    //         name: "food", 
    //         description: "Delicious delicacies" 
    //     },
    //     {
    //       name: "landscape",
    //       description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    //     }
    // ]);

    // function categorySelected(name) {
    //     console.log(`${name} clicked`);
    // };

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/photo-port">
                <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        //<li className="mx-1" key={category.name}>
                        // <span onClick={() => categorySelected(category.name)}>{category.name}</span>
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category); 
                                setContactSelected(false);
                            }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;