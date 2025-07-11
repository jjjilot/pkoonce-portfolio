import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

export const InfoAbout = (props) => {
  return (
    <div className="px-4 py-10 bg-orange-400 text-gray-100 sm:px-6 sm:py-12" data-sb-object-id={props.id}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Left section: Title + Body */}
        <div className="flex-1">
          <h2 className="text-6xl font-thin mb-12" data-sb-field-path="title">
            {props.title}
          </h2>
          <Markdown
            options={{ forceBlock: true }}
            className="mb-6 text-gray-800 text-sm leading-normal text-left w-full md:w-7/8"
            data-sb-field-path="body"
          >
            {props.body}
          </Markdown>
        </div>

        {/* Right section: Headshot + Description */}
        <div className="w-full max-w-xs flex flex-col items-center text-center">
          {props.headshot && (
            <div
              style={{ width: '300px', height: '300px', position: 'relative' }}
              className="rounded-full overflow-hidden mb-4"
              data-sb-field-path="headshot"
            >
              <Image
                src={props.headshot.src}
                alt={props.headshot.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
          {props.description && (
            <p className="text-sm sm:text-base" data-sb-field-path="description">
              {props.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};