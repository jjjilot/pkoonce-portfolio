import { notFound } from 'next/navigation';
import { Hero } from '../components/Hero.jsx';
import { About } from '../components/About.jsx';
import { AboutFooter } from '../components/AboutFooter.jsx';
import { InfoAbout } from '../components/InfoAbout.jsx';
import { InfoGeneral } from '../components/InfoGeneral.jsx';
import { SocialLinks } from '../components/SocialLinks.jsx';
import { SocialPosts } from '../components/SocialPosts.jsx'; // Assuming this component exists
import { SocialPost } from '../components/SocialPost.jsx'; // Assuming this component exists
import { getPageFromSlug } from '../utils/content.js';

const componentMap = {
  realhero: Hero, // Mismatching names due to Contentful quirk
  hero: About, // Mismatching names due to Contentful quirk
  aboutFooter: AboutFooter,
  infoAbout: InfoAbout,
  infoGeneral: InfoGeneral,
  socialLinks: SocialLinks,
  socialPosts: SocialPosts,
  socialPost: SocialPost,
};

export default async function ComposablePage() {
  try {
    const page = await getPageFromSlug("/");

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
