import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Guild } from './Guild';
import { Hero } from './Hero';
import { Navbar } from './Navbar';

const Base = () => (
  <div className="antialiased text-stone-600">
    <div id="page-wrap">
      <Meta title={AppConfig.site_name} description={AppConfig.description} />
      <Navbar />
      <Hero />
      <Guild />
      <Footer />
    </div>
  </div>
);

export { Base };
