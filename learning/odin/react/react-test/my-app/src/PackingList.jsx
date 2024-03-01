function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}
export default function PackingList() {
  return (
    <div>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space Suit" />
        <Item isPacked={true} name="Gold-Leafed Helmet" />
        <Item isPacked={false} name="Photo of Tam" />
        <Item isPacked={true} name="Toilet Paper" />
      </ul>
    </div>
  );
}
