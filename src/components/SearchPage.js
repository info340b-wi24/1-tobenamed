import React from 'react';
import NavBar from './NavBar';
import Perfumeimages from './imagePaths';

export function SearchPage() {
    return (
        <div>
            <NavBar />

            <div className="search-container">
                <input type="text" name="search" placeholder="Search" />
                <select name="filter">
                    <option value="all">All</option>
                    <option value="brand">Brand</option>
                    <option value="price">Price</option>
                    <option value="scent">Scent</option>
                </select>
                <button type="submit">Search</button>
            </div>

            <div className="perfume-container">
                <div className="perfume-item">
                    <div className="perfume-details">
                    <img src={Perfumeimages.killian} alt="Kilian perfume" />
                        <h3>Kilian</h3>
                        <p>Love don't be shy</p>
                        <p>Sweet</p>
                        <p>$$$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.blackOpium}  alt="ysl black opium" />
                        <h3>YSL</h3>
                        <p>Black Opium</p>
                        <p>Spicy</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.lightBlue} alt="light blue" />
                        <h3>Dolce & Gabana</h3>
                        <p>Light Blue</p>
                        <p>Citrus</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.julietteHasAGun} alt="juliette has a gun" />
                        <h3>Juliette has a Gun</h3>
                        <p>Not a Perfume</p>
                        <p>Musk</p>
                        <p>$$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.burberryHer}alt="her" />
                        <h3>Burberry</h3>
                        <p>Her</p>
                        <p>Fruity</p>
                        <p>$$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.fireplace} alt="maison margiela" />
                        <h3>Maison Margiela (REPLICA)</h3>
                        <p>By the Fireplace</p>
                        <p>Woody</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.carolineHerrera}  alt="maison margiela" />
                        <h3>Carolina Herrera</h3>
                        <p>Good Girl Blush</p>
                        <p>Floral</p>
                        <p>$$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.deMarly} alt="maison margiela" />
                        <h3>Parfums de Marly</h3>
                        <p>Delina</p>
                        <p>Floral</p>
                        <p>$$$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.Philosophy} alt="maison margiela" />
                        <h3>Philosophy</h3>
                        <p>Amazing Grace Magnolia</p>
                        <p>Floral</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.RosieJane} alt="maison margiela" />
                        <h3>By / Rosie Jane</h3>
                        <p>Rosie</p>
                        <p>Musk</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.whispersInTheLibrary} alt="maison margiela" />
                        <h3>Maison Margiela (REPLICA)</h3>
                        <p>Whispers in the library</p>
                        <p>Woody</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.woodysandal} alt="maison margiela" />
                        <h3>Dossier</h3>
                        <p>Woody Sandalwood</p>
                        <p>Woody</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.musktherapy} alt="maison margiela" />
                        <h3>Initio</h3>
                        <p>Musk Therapy</p>
                        <p>Woody</p>
                        <p>$$$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.gourmandwhiteflowers} alt="maison margiela" />
                        <h3>Dossier</h3>
                        <p>Gourmand White Flowers</p>
                        <p>Gourmand</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.gourmandaddict} alt="Gourmand Addict Perfume" />
                        <h3>Zara</h3>
                        <p>Gourmand Addict</p>
                        <p>Gourmand</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.fruitysherbert} alt="Gourmand Addict Perfume" />
                        <h3>Bath & Body Works</h3>
                        <p>Fruity Sherbert Scoop</p>
                        <p>Fruity</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.sweettooth} alt="Sabrina Carpenter Perfume" />
                        <h3>Sabrina Carpenter</h3>
                        <p>Sweet Tooth</p>
                        <p>Sweet</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.blackOrchid} alt="tom ford" />
                        <h3>Tom Ford</h3>
                        <p>Black Orchid</p>
                        <p>Spicy</p>
                        <p>$$$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.monParis} alt="mon paris" />
                        <h3>YSL</h3>
                        <p>Mon Paris</p>
                        <p>Fruity</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.amberyVanilla} alt="amberly vanilla" />
                        <h3>Dossier</h3>
                        <p>Ambery Vanilla</p>
                        <p>Spicy</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.chai} alt="chai piece" />
                        <h3>Le Monde</h3>
                        <p>Chai Epice</p>
                        <p>Gourmand</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.happy} alt="happy" />
                        <h3>Clinque</h3>
                        <p>Clinique happy</p>
                        <p>Citrus</p>
                        <p>$</p>
                    </div>
                </div>
                <div className="perfume-item">
                    <div className="perfume-details">
                        <img src={Perfumeimages.finery} alt="finery musk" />
                        <h3>Fine'ry</h3>
                        <p>I'm a musk</p>
                        <p>Musk</p>
                        <p>$</p>
                    </div>
                </div>
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