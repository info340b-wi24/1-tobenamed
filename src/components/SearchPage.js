import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Perfumeimages from './imagePaths';

const perfumes = [
            {
                name: "Kilian",
                image: Perfumeimages.killian,
                brand: "Kilian",
                scent: "Sweet",
                price: "$$$"
            },
            {
                name: "YSL Black Opium",
                image: Perfumeimages.blackOpium,
                brand: "YSL",
                scent: "Spicy",
                price: "$"
            },
            {
                name: "Dolce & Gabana Light Blue",
                image: Perfumeimages.lightBlue,
                brand: "Dolce & Gabana",
                scent: "Citrus",
                price: "$"
            },
            {
                name: "Juliette has a Gun",
                image: Perfumeimages.julietteHasAGun,
                brand: "Juliette has a Gun",
                scent: "Musk",
                price: "$$"
            },
            {
                name: "Burberry",
                image: Perfumeimages.burberryHer,
                brand: "Burberry",
                scent: "Fruity",
                price: "$$"
            },
            {
                name: "Maison Margiela (REPLICA)",
                image: Perfumeimages.fireplace,
                brand: "Maison Margiela (REPLICA)",
                scent: "Woody",
                price: "$"
            },
            {
                name: "Carolina Herrera",
                image: Perfumeimages.carolineHerrera,
                brand: "Carolina Herrera",
                scent: "Floral",
                price: "$$"
            },
            {
                name: "Parfums de Marly",
                image: Perfumeimages.deMarly,
                brand: "Parfums de Marly",
                scent: "Floral",
                price: "$$$"
            },
            {
                name: "Philosophy",
                image: Perfumeimages.Philosophy,
                brand: "Philosophy",
                scent: "Floral",
                price: "$"
            },
            {
                name: "By / Rosie Jane",
                image: Perfumeimages.RosieJane,
                brand: "By / Rosie Jane",
                scent: "Musk",
                price: "$"
            },
            {
                name: "Maison Margiela (REPLICA)",
                image: Perfumeimages.whispersInTheLibrary,
                brand: "Maison Margiela (REPLICA)",
                scent: "Woody",
                price: "$"
            },
            {
                name: "Dossier",
                image: Perfumeimages.woodysandal,
                brand: "Dossier",
                scent: "Woody",
                price: "$"
            },
            {
                name: "Initio",
                image: Perfumeimages.musktherapy,
                brand: "Initio",
                scent: "Woody",
                price: "$$$"
            },
            {
                name: "Dossier",
                image: Perfumeimages.gourmandwhiteflowers,
                brand: "Dossier",
                scent: "Gourmand",
                price: "$"
            },
            {
                name: "Zara",
                image: Perfumeimages.gourmandaddict,
                brand: "Zara",
                scent: "Gourmand",
                price: "$"
            },
            {
                name: "Bath & Body Works",
                image: Perfumeimages.fruitysherbert,
                brand: "Bath & Body Works",
                scent: "Fruity",
                price: "$"
            },
            {
                name: "Sabrina Carpenter",
                image: Perfumeimages.sweettooth,
                brand: "Sabrina Carpenter",
                scent: "Sweet",
                price: "$"
            },
            {
                name: "Tom Ford",
                image: Perfumeimages.blackOrchid,
                brand: "Tom Ford",
                scent: "Spicy",
                price: "$$$"
            },
            {
                name: "YSL",
                image: Perfumeimages.monParis,
                brand: "YSL",
                scent: "Fruity",
                price: "$"
            },
            {
                name: "Dossier",
                image: Perfumeimages.amberyVanilla,
                brand: "Dossier",
                scent: "Spicy",
                price: "$"
            },
            {
                name: "Le Monde",
                image: Perfumeimages.chai,
                brand: "Le Monde",
                scent: "Gourmand",
                price: "$"
            },
            {
                name: "Clinque",
                image: Perfumeimages.happy,
                brand: "Clinque",
                scent: "Citrus",
                price: "$"
            },
            {
                name: "Fine'ry",
                image: Perfumeimages.finery,
                brand: "Fine'ry",
                scent: "Musk",
                price: "$"
            }
];

export function SearchPage() {
    const [searchInput, setSearchInput] = useState('');
    const [filteredPerfumes, setFilteredPerfumes] = useState(perfumes);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedScent, setSelectedScent] = useState([]);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const handlePriceCheckboxChange = (e) => {
        const value = e.target.value;
        if (selectedPrice.includes(value)) {
            setSelectedPrice(selectedPrice.filter(item => item !== value));
        } else {
            setSelectedPrice([...selectedPrice, value]);
        }
    };

    const handleBrandCheckboxChange = (e) => {
        const value = e.target.value;
        if (selectedBrand.includes(value)) {
            setSelectedBrand(selectedBrand.filter(item => item !== value));
        } else {
            setSelectedBrand([...selectedBrand, value]);
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
        if (selectedFilter !== 'all' && searchInput.trim() !== '') {
            filtered = perfumes.filter(perfume => {
                const isMatch = selectedFilter === 'Price'
                    ? selectedPrice.includes(perfume[selectedFilter])
                    : selectedFilter === 'Brand'
                        ? selectedBrand.includes(perfume[selectedFilter])
                        : selectedScent.includes(perfume[selectedFilter]);
                return isMatch && (
                    perfume[selectedFilter].toLowerCase().includes(searchInput.toLowerCase()) ||
                    perfume.name.toLowerCase().includes(searchInput.toLowerCase())
                );
            });
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
                        {/* Brand filter checkboxes */}
                        <div className="checkbox-section">
                            <b>Brand:</b>
                            {['Dolce & Gabana', 'Burberry', 'Dossier'].map(brand => (
                                <label key={brand}>
                                    <input
                                        type="checkbox"
                                        value={brand}
                                        checked={selectedBrand.includes(brand)}
                                        onChange={handleBrandCheckboxChange}
                                    />
                                    {brand}
                                </label>
                            ))}
                        </div>
                        {/* Scent filter checkboxes */}
                        <div className="checkbox-section">
                            <b>Scent:</b>
                            {['Woody', 'Spicy', 'Musk'].map(scent => (
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
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>

            <div className="perfume-container">
                {filteredPerfumes.map((perfume, index) => (
                    <Link to={`/perfume/${index + 1}`} className="perfume-link" key={index}>
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

            <footer>
                <div className="footer-content">
                    <small>2024 Find Your Perfume. All rights reserved.</small>
                    <small>Designed by Aldi Anika Sanmathi</small>
                </div>
            </footer>
        </div>
    );
}

export default SearchPage;