export const Footer = (props) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-gray-600 text-gray-100 text-center px-6 py-6 text-sm"
            data-sb-object-id={props.id}
        >
            <p>
                <span className="mr-1">&copy; {currentYear}</span>
                Peter Koonce Consulting, LLC. All rights reserved.
            </p>
        </footer>
    );
};