const Filtercounty = ({ onSelect }) => {
  const selecthandler = (e) => {
    const regionname = e.target.value;
    onSelect(regionname);
  };
  return (
    <select onChange={selecthandler}>
      <option  className="option ">Filter by region</option >
      <option  className="option "  value="Africa">Africa</option >
      <option  className="option "  value="America">America</option >
      <option   className="option " value="Europe">Europe</option >
      <option   className="option " value="Asia">Asia</option >
      <option  className="option "  value="Oceania">Oceania</option >
    </select>
  );
};
export default Filtercounty;
