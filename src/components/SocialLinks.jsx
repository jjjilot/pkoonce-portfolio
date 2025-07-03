import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiBluesky } from 'react-icons/si';

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
          <h2 className="text-2xl" data-sb-field-path="heading">
            {props.heading}
          </h2>
        )}
        <div className="flex justify-center gap-20 text-3xl">
          {(props.links || []).map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-sb-object-id={link.id}
              data-sb-field-path="url label"
              aria-label={link.label}
              className="hover:opacity-80 hover:scale-110 transition-opacity"
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
    case 'twitter':
      return <FaTwitter />;
    case 'bluesky':
      return <SiBluesky />;
    case 'email':
      return <MdEmail />;
    default:
      return <span>{label}</span>;
  }
};