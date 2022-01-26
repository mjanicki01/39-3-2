const Pokedex = (props) => (
    <div className="main">
        <h1>Pokedex</h1>
        <div className="container">
        {props.defaultProps.map( el =>
            <Pokecard  id={el.id} name={el.name} type={el.type} base_experience={el.base_experience} />
            )
        }
        </div>
    </div>
)