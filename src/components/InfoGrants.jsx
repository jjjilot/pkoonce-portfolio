import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { GrantReference } from './GrantReference';

export const InfoGrants = (props) => {
    const isOrange = props.bgColor === true;

    const bgClass = isOrange ? 'bg-orange-400' : 'bg-gray-100';
    const titleTextClass = isOrange ? 'text-gray-100' : 'text-orange-400';
    const captionTextClass = isOrange ? 'text-gray-100' : 'text-gray-700';

    const grants = props.grantReferences ?? [];

    return (
        <div className={`px-4 py-10 sm:px-6 sm:py-20 ${bgClass}`} data-sb-object-id={props.id}>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                {/* Left section: Title + Body + GrantReferences */}
                <div className="flex-1">
                    <h2 className={`text-5xl font-thin mb-12 ${titleTextClass}`} data-sb-field-path="title">
                        {props.title}
                    </h2>
                    <Markdown
                        options={{ forceBlock: true }}
                        className="mb-6 text-gray-800 text-sm leading-normal text-left w-full md:w-7/8"
                        data-sb-field-path="body"
                    >
                        {props.body}
                    </Markdown>

                    {/* GrantReference components stacked below */}
                    <div className="mt-10 space-y-6 w-full md:w-7/8" data-sb-field-path="grants">
                        {grants.map((grant, idx) => (
                            <GrantReference key={grant.id ?? idx} {...grant} />
                        ))}
                    </div>
                </div>

                {/* Right section: Image + Caption (centered vertically on md+) */}
                <div className="w-full max-w-xs flex flex-col items-center text-center">
                    {props.image && (
                        <div
                            style={{ width: '400px', height: '400px', position: 'relative' }}
                            className="rounded overflow-hidden mb-4"
                            data-sb-field-path="image"
                        >
                            <Image
                                src={props.image.src}
                                alt={props.image.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    {props.caption && (
                        <p className={`text-sm font-thin ${captionTextClass}`} data-sb-field-path="caption">
                            {props.caption}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};