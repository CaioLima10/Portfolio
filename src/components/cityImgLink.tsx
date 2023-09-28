import cityImage from '../assets/img-city.jpg';

export function CityImageLink() {
  const cityName = 'Ferraz de Vasconcelos';
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(cityName)}`;

  return (
    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
      <img src={cityImage} alt={cityName} />
    </a>
  );
}

export default CityImageLink;
