export const SocialPost = (props) => {
    if (!props.postIframeCode) return null;

    // Modify width/height for responsive layout
    const cleanedIframe = props.postIframeCode
        .replace(/width="[^"]*"/, 'width="100%"')
        .replace(/height="[^"]*"/, 'height="100%"');

    return (
        <div
            className="aspect-[4/5] w-full overflow-hidden"
            data-sb-object-id={props.id}
            data-sb-field-path="postIframeCode"
            dangerouslySetInnerHTML={{ __html: cleanedIframe }}
        />
    );
};