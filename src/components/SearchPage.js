import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Perfumeimages from './imagePaths';

const perfumes = [
    {
        name: "Love don't be shy",
        image: Perfumeimages.killian,
        brand: "Kilian",
        scent: "Sweet",
        price: "$$$"
    },
    {
        name: "Black Opium",
        image: Perfumeimages.blackOpium,
        brand: "YSL",
        scent: "Spicy",
        price: "$"
    },
    {
        name: "Light Blue",
        image: Perfumeimages.lightBlue,
        brand: "Dolce & Gabana",
        scent: "Citrus",
        price: "$"
    },
    {
        name: "Not a Perfume",
        image: Perfumeimages.julietteHasAGun,
        brand: "Juliette has a Gun",
        scent: "Musk",
        price: "$$"
    },
    {
        name: "Her",
        image: Perfumeimages.burberryHer,
        brand: "Burberry",
        scent: "Fruity",
        price: "$$"
    },
    {
        name: "By the Fireplace",
        image: Perfumeimages.fireplace,
        brand: "Maison Margiela (REPLICA)",
        scent: "Woody",
        price: "$"
    },
    {
        name: "Good Girl Blush",
        image: Perfumeimages.carolineHerrera,
        brand: "Carolina Herrera ",
        scent: "Floral",
        price: "$$"
    },
    {
        name: "Delina",
        image: Perfumeimages.deMarly,
        brand: "Parfums de Marly",
        scent: "Floral",
        price: "$$$"
    },
    {
        name: "Amazing Grace Magnolia",
        image: Perfumeimages.Philosophy,
        brand: "Philosophy",
        scent: "Floral",
        price: "$"
    },
    {
        name: "Rosie",
        image: Perfumeimages.RosieJane,
        brand: "By / Rosie Jane",
        scent: "Musk",
        price: "$"
    },
    {
        name: "Whispers in the library",
        image: Perfumeimages.whispersInTheLibrary,
        brand: "Maison Margiela (REPLICA)",
        scent: "Woody",
        price: "$"
    },
    {
        name: "Woody Sandalwood",
        image: Perfumeimages.woodysandal,
        brand: "Dossier",
        scent: "Woody",
        price: "$"
    },
    {
        name: "Musk Therapy",
        image: Perfumeimages.musktherapy,
        brand: "Initio",
        scent: "Woody",
        price: "$$$"
    },
    {
        name: "Gourmand White Flowers",
        image: Perfumeimages.gourmandwhiteflowers,
        brand: "Dossier",
        scent: "Gourmand",
        price: "$"
    },
    {
        name: "Gourmand Addict",
        image: Perfumeimages.gourmandaddict,
        brand: "Zara",
        scent: "Gourmand",
        price: "$"
    },
    {
        name: "Fruity Sherbert Scoop",
        image: Perfumeimages.fruitysherbert,
        brand: "Bath & Body Works",
        scent: "Fruity",
        price: "$"
    },
    {
        name: "Sweet Tooth",
        image: Perfumeimages.sweettooth,
        brand: "Sabrina Carpenter",
        scent: "Sweet",
        price: "$"
    },
    {
        name: "Black Orchid",
        image: Perfumeimages.blackOrchid,
        brand: "Tom Ford",
        scent: "Spicy",
        price: "$$$"
    },
    {
        name: " Mon Paris",
        image: Perfumeimages.monParis,
        brand: "YSL",
        scent: "Fruity",
        price: "$"
    },
    {
        name: "Ambery Vanilla",
        image: Perfumeimages.amberyVanilla,
        brand: "Dossier",
        scent: "Spicy",
        price: "$"
    },
    {
        name: "Le Chai Epice ",
        image: Perfumeimages.chai,
        brand: "Le Monde",
        scent: "Gourmand",
        price: "$"
    },
    {
        name: "Clinque Happy",
        image: Perfumeimages.happy,
        brand: "Clinque",
        scent: "Citrus",
        price: "$"
    },
    {
        name: "I'm a Musk",
        image: Perfumeimages.finery,
        brand: "Fine'ry",
        scent: "Musk",
        price: "$"
    }
];

export function SearchPage() {
    const [searchInput, setSearchInput] = useState('');
    const [filteredPerfumes, setFilteredPerfumes] = useState(perfumes);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [selectedScent, setSelectedScent] = useState([]);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handlePriceCheckboxChange = (e) => {
        const value = e.target.value;
        if (selectedPrice.includes(value)) {
            setSelectedPrice(selectedPrice.filter(item => item !== value));
        } else {
            setSelectedPrice([...selectedPrice, value]);
        }
    };

    const handleScentCheckboxChange = (e) => {
        const value = e.target.value;
        if (selectedScent.includes(value)) {
            setSelectedScent(selectedScent.filter(item => item !== value));
        } else {
            setSelectedScent([...selectedScent, value]);
        }
    };

    const filterPerfumes = () => {
        let filtered = perfumes;

        // Filter by search input
        if (searchInput.trim() !== '') {
            filtered = filtered.filter(perfume => {
                return (
                    perfume.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                    perfume.scent.toLowerCase().includes(searchInput.toLowerCase())
                );
            });
        }

        // Filter by selected checkboxes
        if (selectedPrice.length > 0) {
            filtered = filtered.filter(perfume => selectedPrice.includes(perfume.price));
        }

        if (selectedScent.length > 0) {
            filtered = filtered.filter(perfume => selectedScent.includes(perfume.scent));
        }

        return filtered;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFilteredPerfumes(filterPerfumes());
    };
   
      

    return (
        <div className="search-page-container">
            <div className="filter-container">
                <form onSubmit={handleFormSubmit} className="filter-form">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        className="search-input"
                    />
                    <div className="filter-radio">
                        {/* Price filter checkboxes */}
                        <div className="checkbox-section">
                            <b>Price:</b>
                            {['$', '$$', '$$$'].map(price => (
                                <label key={price}>
                                    <input
                                        type="checkbox"
                                        value={price}
                                        checked={selectedPrice.includes(price)}
                                        onChange={handlePriceCheckboxChange}
                                    />
                                    {price}
                                </label>
                            ))}
                        </div>
                        {/* Scent filter checkboxes */}
                        <div className="checkbox-section">
                            <b>Scent:</b>
                            {['Woody', 'Spicy', 'Musk', 'Citrus', 'Floral', 'Fruity', 'Gourmand', 'Sweet'].map(scent => (
                                <label key={scent}>
                                    <input
                                        type="checkbox"
                                        value={scent}
                                        checked={selectedScent.includes(scent)}
                                        onChange={handleScentCheckboxChange}
                                    />
                                    {scent}
                                </label>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>
            </div>

            <div className="perfume-container">
                {filteredPerfumes.map((perfume, index) => (
                    <Link to={`/perfume/${perfume.name}`} className="perfume-link" key={index}>
                        <div className="perfume-item">
                            <div className="perfume-details">
                                <img src={perfume.image} alt={perfume.name} />
                                <h5>{perfume.brand}</h5>
                                <p>{perfume.name}</p>
                                <p>{perfume.scent}</p>
                                <p>{perfume.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default SearchPage;