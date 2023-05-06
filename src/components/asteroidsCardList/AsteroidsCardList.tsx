import React, { useState, useEffect } from 'react';
import './cardList.css'

function AsteroidsCardList() {
  /*const [asteroids, setAsteroids] = useState([
    {id:1,title:'ffff',body:'fdsafasdfas'},
    {id:2,title:'ffff',body:'fdsafasdfas'},
  ]);*/

  const asteroids = [
    {
      id:1,
      name:'465633 (2009 JR5)',
      nasa_jpl_url:'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633',
      absolute_magnitude_h: '20.20', 
      is_potentially_hazardous_asteroid: true,
      estimated_diameter: {
        kilometers: {
          estimated_diameter_min: 0.2130860292,
          estimated_diameter_max: 0.4764748465
        },
      },
      is_sentry_object: false
    },
  ]

  useEffect(() => {
    /*
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data => addingToAsteroids(data))
        .catch(e=>console.log(e));*/
  }, []);

  function addingToAsteroids(data: any) {
    console.log(data);
    //setAsteroids(data);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {asteroids.map(((item) => (
              <>
                <div className="col">
                  <div className="clash-card">
                    <div className="clash-card__image clash-card__image--color">
                      <img src={item.nasa_jpl_url} alt="img" />
                    </div>
                    <div className="clash-card__level clash-card__level--color">{item.id}</div>
                    <div className="clash-card__unit-name">{item.name}</div>
                    <div className="clash-card__unit-description">
                      <p>Estimated Diameter in kilometers</p>
                      <p>Min: {item.estimated_diameter.kilometers.estimated_diameter_min}</p>
                      <p>Max: {item.estimated_diameter.kilometers.estimated_diameter_min}</p>
                    </div>

                    <div className="clash-card__unit-stats clash-card__unit-stats-background clearfix">
                      <div className="one-third">
                        <div className="stat">{item.absolute_magnitude_h}<sup>km</sup></div>
                        <div className="stat-value">Magnitude</div>
                      </div>

                      <div className="one-third">
                        <div className="stat">{item.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</div>
                        <div className="stat-value">Dangerous</div>
                      </div>

                      <div className="one-third no-border">
                        <div className="stat">{item.is_sentry_object ? 'Yes' : 'No'}</div>
                        <div className="stat-value">Sentry</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )))}
          </div>
        </div>
    </div>
  );
}

export default AsteroidsCardList;