import { useTranslation } from 'react-i18next';
import cityImage from '../assets/img-city.jpg';

export function CityImageLink() {
  const cityName = 'Ferraz de Vasconcelos';
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(cityName)}`;

  const { t } = useTranslation()

  return (
    <> 
    <span>{t("info-img")}</span>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        <img className=' border-2  border-bg-secondary' src={cityImage} alt={cityName} />
      </a>
    </>
  );
}

export default CityImageLink;
