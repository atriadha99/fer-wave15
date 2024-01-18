const Card = ({ icon, title, detail, className }) => {
  return (
    <div className={className}>
      <img src={`assets/img/icons/${icon}.png`} alt="icon" />
      <p className="my-3 text-xl font-bold">{title}</p>
      <p>{detail}</p>
    </div>
  );
};

export default Card;
