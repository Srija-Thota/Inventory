

// eslint-disable-next-line react/prop-types
function DashboardCard({ title, value,src}) {
  return (
    <div className="card">
      
      <h3>{title}</h3>
      {src && <img src={src} alt={title} className="card-image" />}
      <p className="cardvalue">{value}</p>
    </div>
  );
}

export default DashboardCard;