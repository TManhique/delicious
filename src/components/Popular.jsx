import { useEffect, useState } from "react";
import style from "styled-components"



function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();

    }, []);


    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            );
        const data = await api.json();
        console.log(data);
        setPopular(data.recipes)
    };



  return (
    <div>

      {popular.map((recipe) => {
        return (
          <Wrapper key={recipe.id}>
            <h3>Popular Picks</h3>
            {popular.map((recipe) =>{
              return(
                <Card>
                  <p>{recipe.title}</p>
                </Card>

              );
            })}
          </Wrapper>
        );
      })}


    </div>
  )
}


const Wrapper = style.div`
  margin: 4rem 0rem;
`;

const Card = style.div`
  min-height: 25rem;
  border-radious: 2rem;

`

export default Popular;