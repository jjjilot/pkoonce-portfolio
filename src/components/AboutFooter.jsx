import Markdown from 'markdown-to-jsx';

export const AboutFooter = (props) => {
    return (
        <div className="bg-gray-100 text-gray-700 px-6 py-10 text-center" data-sb-object-id={props.id}>
            {/* Orange line */}
            <div className="w-150 h-0.5 mx-auto mb-10 bg-orange-400 rounded-full"></div>

            {/* Body text (Markdown-enabled) */}
            {props.body && (
                <Markdown
                    options={{ forceBlock: true }}
                    className="max-w-4xl mx-auto text-lg font-thin sm:text-md leading-relaxed text-center mb-8"
                    data-sb-field-path="body"
                >
                    {props.body}
                </Markdown>
            )}
            {/* Orange line */}
            <div className="w-150 h-0.5 mx-auto mb-2 bg-orange-400 rounded-full"></div>
        </div>
    );
};
