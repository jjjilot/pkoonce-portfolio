import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const themeClassMap = {
  primary: 'bg-orange-400 text-white',
  dark: 'bg-gray-800 text-white',
};

export const SocialLinks = (props) => {
  return (
    <div
      className={`px-6 py-6 ${themeClassMap[props.theme] ?? themeClassMap['primary']}`}
      data-sb-object-id={props.id}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {props.heading && (
          <h2
            className="text-2xl font-semibold"
            data-sb-field-path="heading"
          >
            {props.heading}
          </h2>
        )}
        <div className="flex justify-center gap-6 text-3xl">
          {(props.links || []).map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-sb-object-id={link.id}
              data-sb-field-path="url label"
              aria-label={link.label}
              className="hover:opacity-80 transition-opacity"
            >
              {getIcon(link.label)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const getIcon = (label) => {
  switch (label.toLowerCase()) {
    case 'linkedin':
      return <FaLinkedin />;
    case 'github':
      return <FaGithub />;
    case 'twitter':
      return <FaTwitter />;
    default:
      return <span>{label}</span>;
  }
};