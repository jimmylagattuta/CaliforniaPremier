import React from "react";
import "./LocationsSection.css";

const locations = [
  {
    city: "Santa Rosa",
    address: "864 2nd Street Suite B, Santa Rosa, CA 95404",
    image: "https://i.postimg.cc/8cBRDRnQ/i-Stock-1878629507-2-1-1.webp",
    mapsQuery: "Santa+Rosa+-+864+2nd+Street+Suite+B,+Santa+Rosa,+CA+95404"
  },
  {
    city: "Sacramento",
    address: "7275 E. Southgate Drive Suite 306, Sacramento, CA 95823",
    image: "https://i.postimg.cc/K8NmLRCG/i-Stock-2159424867-1.webp",
    mapsQuery: "Sacramento+-+7275+E.+Southgate+Drive+Suite+306,+Sacramento,+CA+95823"
  },
  {
    city: "Stockton",
    address: "420 Acacia Street Suite 19, Stockton, CA 95203",
    image: "https://i.postimg.cc/KjyWJ5gd/i-Stock-1357814327-1.webp",
    mapsQuery: "Stockton+-+420+Acacia+Street+Suite+19,+Stockton,+CA+95203"
  },
  {
    city: "Modesto",
    address: "1130 Coffee Road BLDG 2B, Modesto, CA 95355",
    image: "https://i.postimg.cc/QdpHz8Pw/i-Stock-1343463188-1.webp",
    mapsQuery: "Modesto+-+1130+Coffee+Road+BLDG+2B,+Modesto,+CA+95355"
  },
  {
    city: "Hayward",
    address: "24700 Calaroga Ave Suite 103, Hayward, CA 94545",
    image: "https://i.postimg.cc/Hnwkh3v5/i-Stock-1135194294-1.webp",
    mapsQuery: "Hayward+-+24700+Calaroga+Ave+Suite+103,+Hayward,+CA+94545"
  },
  {
    city: "Salinas",
    address: "945 N. Blanco Suite A, Salinas, CA 93901",
    image: "https://i.postimg.cc/MTzPBG2S/i-Stock-1176374269-1.webp",
    mapsQuery: "Salinas+-+945+N.+Blanco+Suite+A,+Salinas,+CA+93901"
  },
  {
    city: "San Jose",
    address: "2375 Montpelier Drive Suite 10, San Jose, CA 95116",
    image: "https://i.postimg.cc/13PWgKkd/i-Stock-465837688-1.webp",
    mapsQuery: "San+Jose+-+2375+Montpelier+Drive+Suite+10,+San+Jose,+CA+95116"
  },
  {
    city: "Fresno",
    address: "349 E. Bullard Ave Suite 105, Fresno, CA 93710",
    image: "https://i.postimg.cc/cH87kgqY/i-Stock-588965234-1.webp",
    mapsQuery: "Fresno+-+349+E.+Bullard+Ave+Suite+105,+Fresno,+CA+93710"
  },
  {
    city: "Hanford",
    address: "1004 N. Douty Street, Hanford, CA 93230",
    image: "https://i.postimg.cc/50qytbLT/i-Stock-2198440524-1.webp",
    mapsQuery: "Hanford+-+1004+N.+Douty+Street,+Hanford,+CA+93230"
  },
  {
    city: "Bakersfield",
    address: "3550 Q. Street Suite 105, Bakersfield, CA 93301",
    image: "https://i.postimg.cc/ZnCGMLbH/i-Stock-2178001181-1.webp",
    mapsQuery: "Bakersfield+-+3550+Q.+Street+Suite+105,+Bakersfield,+CA+93301"
  }
];

function LocationsSection() {
  return (
    <section className="locations-section">
      <div className="hero-content-title">
        <div className="line"></div>
        <h1 className="company-name">OUR LOCATIONS</h1>
        <div className="line"></div>
      </div>
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`location-card ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="location-image" style={{ backgroundImage: `url(${location.image})` }}></div>
            <div className="location-info">
              <h2 className="location-city">{location.city}</h2>
              <p className="location-address">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.postimg.cc/HLxtkzZm/map-pin-1-1.webp"
                    alt="Map icon"
                    className="map-icon"
                    height="16"
                    weight="16"
                  />
                  {location.address}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationsSection;
