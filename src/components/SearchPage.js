import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Perfumeimages from './imagePaths';

const perfumes = [
            {
                id: "lovedontbeshy",
                name: "Kilian",
                image: Perfumeimages.killian,
                brand: "Kilian",
                scent: "Sweet",
                price: "$$$"
            },
            {
                id:"blackopium",
                name: "YSL Black Opium",
                image: Perfumeimages.blackOpium,
                brand: "YSL",
                scent: "Spicy",
                price: "$"
            },
            {
                id:"lightblue",
                name: "Dolce & Gabana Light Blue",
                image: Perfumeimages.lightBlue,
                brand: "Dolce & Gabana",
                scent: "Citrus",
                price: "$"
            },
            {
                id:"notaperfume",
                name: "Juliette has a Gun",
                image: Perfumeimages.julietteHasAGun,
                brand: "Juliette has a Gun",
                scent: "Musk",
                price: "$$"
            },
            {
                id:"her",
                name: "Burberry",
                image: Perfumeimages.burberryHer,
                brand: "Burberry",
                scent: "Fruity",
                price: "$$"
            },
            {
                id:"bythefireplace",
                name: "Maison Margiela (REPLICA)",
                image: Perfumeimages.fireplace,
                brand: "Maison Margiela (REPLICA)",
                scent: "Woody",
                price: "$"
            },
            {
                id:"goodgirl",
                name: "Carolina Herrera",
                image: Perfumeimages.carolineHerrera,
                brand: "Carolina Herrera",
                scent: "Floral",
                price: "$$"
            },
            {
                id:"delina",
                name: "Parfums de Marly",
                image: Perfumeimages.deMarly,
                brand: "Parfums de Marly",
                scent: "Floral",
                price: "$$$"
            },
            {
                id:"amaziggrace",
                name: "Philosophy",
                image: Perfumeimages.Philosophy,
                brand: "Philosophy",
                scent: "Floral",
                price: "$"
            },
            {
                id:"rosie",
                name: "By / Rosie Jane",
                image: Perfumeimages.RosieJane,
                brand: "By / Rosie Jane",
                scent: "Musk",
                price: "$"
            },
            {
                id: "whispersinlib",
                name: "Maison Margiela (REPLICA)",
                image: Perfumeimages.whispersInTheLibrary,
                brand: "Maison Margiela (REPLICA)",
                scent: "Woody",
                price: "$"
            },
            {
                id:"woodysandal",
                name: "Dossier",
                image: Perfumeimages.woodysandal,
                brand: "Dossier",
                scent: "Woody",
                price: "$"
            },
            {
                id:"musktherapy",
                name: "Initio",
                image: Perfumeimages.musktherapy,
                brand: "Initio",
                scent: "Woody",
                price: "$$$"
            },
            {
                id:"gourmandwhiteflowers",
                name: "Dossier",
                image: Perfumeimages.gourmandwhiteflowers,
                brand: "Dossier",
                scent: "Gourmand",
                price: "$"
            },
            {
                id:"gourmandaddict",
                name: "Zara",
                image: Perfumeimages.gourmandaddict,
                brand: "Zara",
                scent: "Gourmand",
                price: "$"
            },
            {
                id:"fruitysherbert",
                name: "Bath & Body Works",
                image: Perfumeimages.fruitysherbert,
                brand: "Bath & Body Works",
                scent: "Fruity",
                price: "$"
            },
            {
                id:"sweettooth",
                name: "Sabrina Carpenter",
                image: Perfumeimages.sweettooth,
                brand: "Sabrina Carpenter",
                scent: "Sweet",
                price: "$"
            },
            {
                id:"blackorchid",
                name: "Tom Ford",
                image: Perfumeimages.blackOrchid,
                brand: "Tom Ford",
                scent: "Spicy",
                price: "$$$"
            },
            {
                id:"monparis",
                name: "YSL",
                image: Perfumeimages.monParis,
                brand: "YSL",
                scent: "Fruity",
                price: "$"
            },
            {
                id:"amberyvanilla",
                name: "Dossier",
                image: Perfumeimages.amberyVanilla,
                brand: "Dossier",
                scent: "Spicy",
                price: "$"
            },
            {
                id:"chaiepice",
                name: "Chai Epice",
                image: Perfumeimages.chai,
                brand: "Le Monde",
                scent: "Gourmand",
                price: "$"
            },
            {
                id:"cliniquehappy",
                name: "Clinque",
                image: Perfumeimages.happy,
                brand: "Clinque",
                scent: "Citrus",
                price: "$"
            },
            {
                id: "imamusk",
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
            return perfume[selectedFilter].toLowerCase().includes(searchInput.toLowerCase());
          } else {
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
              <Link to={`/perfume/${index + 1}`} className="perfume-link">
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
            <small> 2024 Find Your Perfume. All rights reserved.</small>
            <small>Designed by Aldi Anika Sanmathi</small>
          </div>
        </footer>
      </div>
    );
  }
  
export default SearchPage;