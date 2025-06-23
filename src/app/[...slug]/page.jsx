import { notFound } from 'next/navigation';
import { About } from '../../components/About.jsx';
import { SocialLinks } from '../../components/SocialLinks.jsx';
import { getPageFromSlug } from '../../utils/content.js';

const componentMap = {
  about: About,
  socialLinks: SocialLinks,
};

export default async function ComposablePage({ params }) {
  const { slug } = params;

  const pageSlug = slug.join('/');

  try {
    const page = await getPageFromSlug(`/${pageSlug}`);

    if (!page) {
      return notFound();
    }

    return (
      <div data-sb-object-id={page.id}>
        {(page.sections || []).map((section, idx) => {
          const Component = componentMap[section.type];
          return <Component key={idx} {...section} />;
        })}
      </div>
    );
  } catch (error) {
    console.error(error.message);
    return notFound();
  }
}
