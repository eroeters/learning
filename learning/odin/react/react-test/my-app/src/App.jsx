// function ListItem(props) {
//   return <li>{props.animal}</li>;
// }

// function List(props) {
//   if (!props.animals) {
//     return <div>Loading...</div>;
//   }

//   if (props.animals.length === 0) {
//     return <div>There are no animals in the list!</div>;
//   }

//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <ListItem key={animal} animal={animal} />;
//       })}
//     </ul>
//   );
// }

// export default function App() {
//   // const animals = ["Lion", "Cow", "Snake", "Lizard"];
//   const animals = [];
//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }

function List(props) {
  return (
    <div>
      {!props.animals ? (
        <div>Loading...</div>
      ) : props.animals.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (
        <div>There are no animals on the list!</div>
      )}
    </div>
  );
}

export default function App() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
