import { SocialPost } from './SocialPost';

export const SocialPosts = (props) => {
    const posts = props.posts ?? [];

    return (
        <div className="bg-gray-100 px-4 py-10 sm:px-6 sm:py-14" data-sb-object-id={props.id}>
            <div className="max-w-5xl mx-auto">
                {props.title && (
                    <h2 className="text-5xl font-thin text-orange-400 mb-8" data-sb-field-path="title">
                        {props.title}
                    </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-sb-field-path="posts">
                    {posts.map((post, idx) => (
                        <SocialPost key={post.id ?? idx} {...post} />
                    ))}
                </div>
            </div>
        </div>
    );
};