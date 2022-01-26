const Pokecard = (props) => (
    <div>
        <h3><b>{props.name}</b></h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
        <h5>Type: {props.type}</h5>
        <h5>EXP: {props.base_experience}</h5>
    </div>
)