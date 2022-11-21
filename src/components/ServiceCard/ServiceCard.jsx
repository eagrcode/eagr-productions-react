function ServiceCard({ icon, title }) {
  return (
    <div className="card">
      {icon}
      <h3>{title}</h3>
    </div>
  );
}

export default ServiceCard;
