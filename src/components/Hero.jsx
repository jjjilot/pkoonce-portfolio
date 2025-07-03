import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

export const Hero = (props) => {
  return (
    <>
      <div className="relative w-full h-[calc(100vh_-_4rem)]" data-sb-object-id={props.id}>
        {/* Background image */}
        {props.background?.src && (
          <Image
            src={props.background.src}
            alt={props.background.alt || 'Hero background'}
            fill
            priority
            className="object-cover z-0"
            data-sb-field-path="image"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Text content */}
        <div className="relative z-20 h-full flex items-center px-6 md:px-16">
          <div className="max-w-2xl text-left text-white">
            {props.title && (
              <h1
                className="text-4xl md:text-6xl font-light tracking-wide mb-4"
                data-sb-field-path="title"
              >
                {props.title}
              </h1>
            )}
            {props.body && (
              <Markdown
                options={{ forceBlock: true }}
                className="text-lg md:text-xl font-light tracking-wide"
                data-sb-field-path="body"
              >
                {props.body}
              </Markdown>
            )}
          </div>
        </div>
      </div>

      {/* Section lead-in heading */}
      <div className="bg-gray-100 py-8">
        <h2 className="text-center text-5xl font-thin text-orange-400">Our Services</h2>
      </div>
    </>
  );
};