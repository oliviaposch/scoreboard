const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>

      {/* <Counter score={props.score} /> */}
      <Counter />
    </div>
  );
} 

//display dynamically scores numbers
class Counter extends React.Component {
  //score state
  // constructor(){
  //   super()
  //   //name of the object must be:state 
  //   this.state = {
  //     //initial state
  //     score:0
  //   };
  // }
  state = {
    score: 0
  };
  //making counter interactive
  // score changes when the user clicks the plus or minus button
  //giving our buttons click event listener
 /* incrementScore() {  */
  incrementScore = () => { //converted in arrow function
    //update a component state
    this.setState({
      score: this.state.score + 1
    });

    //console.log('Hi, from inside increment score!');
    //console.log(this); //refer our properties in our Counter class

  }
  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    });
  }
  render() { //method
    //console.log(this);//refer our counter Class
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        {/* <span className="counter-score">{ this.props.score }</span> {/*this refer to the component(Counter) instance*/ }
        <span className="counter-score">{ this.state.score }</span>
       {/*  <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button> */}
        {/* <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button> */}
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length} 
      />

      {/* Players list */}
      {props.initialPlayers.map( player =>
        <Player 
          name={player.name}
          // score={player.score}
          key={player.id.toString()}            
        />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);