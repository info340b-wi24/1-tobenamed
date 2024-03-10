import React, { useState } from 'react';
import NavBar from './NavBar';
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

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const filterPerfumes = () => {
        let filtered = perfumes;
        if (selectedFilter !== 'all' && searchInput.trim() !== '') {
            filtered = perfumes.filter(perfume => {
                if (selectedFilter === 'Price') {
                    // Check if price includes the search input
                    return perfume[selectedFilter].toLowerCase().includes(searchInput.toLowerCase());
                } else {
                    // For other filters, use strict comparison
                    return perfume[selectedFilter].toLowerCase() === searchInput.toLowerCase();
                }
            });
        }
        return filtered;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFilteredPerfumes(filterPerfumes());
    };

    return (
        <div>
            <NavBar />
            
            <div className="filter-container">
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                    <select name="filter" value={selectedFilter} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="brand">Brand</option>
                        <option value="scent">Scent</option>
                        <option value="price">Price</option>
                    </select>
                    <button type="submit">Search</button>
                </form>
            </div>

            <div className="perfume-container">
                {filteredPerfumes.map((perfume, index) => (
                    <div className="perfume-item" key={index}>
                        <div className="perfume-details">
                            <img src={perfume.image} alt={perfume.name} />
                            <h5>{perfume.brand}</h5>
                            <p>{perfume.name}</p>
                            <p>{perfume.scent}</p>
                            <p>{perfume.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer>
                <div className="footer-content">
                    <small> 2024 Find Your Perfume. All rights reserved.</small>
                    <small>Designed by Aldi Anika Sanmathi</small>
                </div>
            </footer>
        </div>
    );
}

export default SearchPage;