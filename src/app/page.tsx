import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Experience } from '../components/experience';
import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { Work } from '../components/work';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Experience />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
