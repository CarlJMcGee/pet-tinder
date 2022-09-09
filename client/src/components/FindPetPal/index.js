// FindPetPal Component

// import React
import React from "react";
import { useQuery } from "@apollo/client";
import { ME, PETS } from "../../utils/queries";
import "../../styles/FindPetPal.css";

function FindPetPal() {
  //TODO: get user data
  const { loading: gettingUser } = useQuery(ME);
  const { loading: gettingPets } = useQuery(PETS);
  //   const [lastDirection, setLastDirection] = useState();

  if (gettingUser || gettingPets) {
    return <h1>Loading...</h1>;
  }

  // const swipe = (direction, nameToDelete) => {
  //   console.log("removing: " + nameToDelete);
  //   setLastDirection(direction);
  // };

  // const swipe = (direction, nameToDelete) => {
  //   console.log("removing: " + nameToDelete);
  //   setLastDirection(direction);
  // };

  // const outOfFrame = (name) => {
  //   console.log(name + "left the screen!");
  // };

  return (
    <section className="findPetContainer">
      <h1 className="findText">Find a pal for your pet!</h1>
      <div className="petContainer">
        <div className="petProfile">
          <img
            className="pupImg"
            src={require("../../assets/pals.jpeg")}
            alt="puppies"
          />
          <ul>
            <li>Name: Bowie</li>
            <li>Age: 3 years</li>
            <li>Breed: Golden Retriever</li>
            <li>Temperament: Happy</li>
            <button>Like</button> <button>Pass</button>
          </ul>
        </div>

        <div className="petProfile">
          <img
            className="pupImg"
            src={require("../../assets/dalmatian.jpeg")}
            alt="dalmatian"
          />
          <ul>
            <li>Name: Dottie</li>
            <li>Age: 2 years</li>
            <li>Breed: Dalmation</li>
            <li>Temperament: Excellent family dog</li>
            <button>Like</button> <button>Pass</button>
          </ul>
        </div>

        <div className="petProfile">
          <img
            className="pupImg"
            src={require("../../assets/frenchie.jpg")}
            alt="frenchie"
          />
          <ul>
            <li>Name: Spudz McKenzie</li>
            <li>Age: 3 years</li>
            <li>Breed: French Bulldog</li>
            <li>Temperament: Stubborn</li>
            <button>Like</button> <button>Pass</button>
          </ul>
        </div>

        <div className="petProfile">
          <img
            className="pupImg"
            src={require("../../assets/shiba-inu.jpeg")}
            alt="frenchie"
          />
          <ul>
            <li>Name: Mochi</li>
            <li>Age: 3 years</li>
            <li>Breed: Shiba Inu</li>
            <li>Temperament: Stubborn</li>
            <button>Like</button> <button>Pass</button>
          </ul>
        </div>

        {/* <img src={require("../../assets/pals.jpeg")} alt="puppies" /> */}
        {/* <div className="cardContainer"></div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )} */}
      </div>
    </section>
  );
}
//TODO: add pass and like buttons

export default FindPetPal;
