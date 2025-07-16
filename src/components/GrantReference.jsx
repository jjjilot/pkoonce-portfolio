"use client";
import { useState } from 'react';

export const GrantReference = (props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <div
            className="bg-gray-200 rounded shadow p-6"
            data-sb-object-id={props.id}
        >
            {/* Title */}
            <h3 className="text-xl font-semibold text-orange-400 mb-2" data-sb-field-path="title">
                {props.title}
            </h3>

            {/* Location + Date */}
            <div className="text-sm text-gray-600 mb-4" data-sb-field-path="location date">
                <span>{props.location}</span> · <span>{props.date}</span>
            </div>

            {/* Learn More Toggle */}
            <button
                className="text-sm text-blue-600 hover:underline mb-2"
                onClick={toggleExpanded}
                type="button"
            >
                {expanded ? 'Show less' : 'Learn more'}
            </button>

            {/* Body Text (conditionally shown) */}
            {expanded && (
                <p
                    className="mt-2 text-sm text-gray-800"
                    data-sb-field-path="body"
                >
                    {props.body}
                </p>
            )}
        </div>
    );
};