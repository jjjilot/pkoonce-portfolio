import { notFound } from 'next/navigation';
import { Hero } from '../components/Hero.jsx';
import { About } from '../components/About.jsx';
import { AboutFooter } from '../components/AboutFooter.jsx';
import { InfoAbout } from '../components/InfoAbout.jsx';
import { SocialLinks } from '../components/SocialLinks.jsx';
import { getPageFromSlug } from '../utils/content.js';

const componentMap = {
  realhero: Hero, // Mismatching names due to Contentful quirk
  hero: About, // Mismatching names due to Contentful quirk
  aboutFooter: AboutFooter,
  infoAbout: InfoAbout,
  socialLinks: SocialLinks,
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
