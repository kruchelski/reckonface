import './style.css';

function Rank({ user }) {
  const { name, entries } = user;
  return (
    <div className="rank-container">
      <p className="rank__header">{name}... You submited</p>
      <p className="rank__number">
        {entries} {entries === 1 ? 'image' : 'images'}
      </p>
    </div>
  );
}

export default Rank;
