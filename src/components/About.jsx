import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

const themeClassMap = {
  imgLeft: 'md:flex-row-reverse',
  imgRight: 'md:flex-row',
};

export const About = (props) => {
  const headingAlignClass = props.theme === 'imgLeft' ? 'text-left' : 'text-right';

  return (
    <div className="px-4 py-6 bg-gray-100 sm:px-6 sm:py-8" data-sb-object-id={props.id}>
      <div
        className={`max-w-5xl mx-auto flex flex-col gap-4 md:items-center ${themeClassMap[props.theme] ?? themeClassMap['imgRight']}`}
      >
        <div className="flex-1 w-full max-w-md mx-auto">
          <h1 className={`mb-2 text-2xl sm:text-3xl font-thin text-orange-400 ${headingAlignClass}`} data-sb-field-path="heading">
            {props.heading}
          </h1>
          {props.body && (
            <Markdown
              options={{ forceBlock: true }}
              className={`mb-3 text-sm sm:text-base text-gray-700 text-justify`}
              data-sb-field-path="body"
            >
              {props.body}
            </Markdown>
          )}
        </div>
        {props.image && (
          <div style={{ width: '475px', height: '350px', position: 'relative' }}>
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              className="object-cover rounded-md"
              data-sb-field-path="image"
            />
          </div>
        )}
      </div>
    </div>
  );
};