export default function SocialIcon({ icon, name, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="social-icon">
      <img src={icon} alt={`Social icon ${name}`} />
    </a>
  );
}
