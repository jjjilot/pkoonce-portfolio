import { notFound } from 'next/navigation';
import { Hero } from '../../components/Hero.jsx';
import { About } from '../../components/About.jsx';
import { AboutFooter } from '../../components/AboutFooter.jsx';
import { InfoAbout } from '../../components/InfoAbout.jsx';
import { InfoGeneral } from '../../components/InfoGeneral.jsx';
import { SocialLinks } from '../../components/SocialLinks.jsx';
import { SocialPosts } from '../../components/SocialPosts.jsx';
import { SocialPost } from '../../components/SocialPost.jsx';
import { InfoGrants } from '../../components/InfoGrants.jsx';
import { Footer } from '../../components/Footer.jsx';
import { getPageFromSlug } from '../../utils/content.js';

const componentMap = {
  realhero: Hero,
  about: About,
  aboutFooter: AboutFooter,
  infoAbout: InfoAbout,
  infoGeneral: InfoGeneral,
  socialLinks: SocialLinks,
  socialPost: SocialPost,
  socialPosts: SocialPosts,
  infoGrants: InfoGrants,
  footer: Footer,
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
