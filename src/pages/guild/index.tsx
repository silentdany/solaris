import Index from '..';
import { DividerTriangle } from '../../components/DividerTriangle';
import { AmbitionsBlock } from '../../components/guild/AmbitionsBlock';
import { AttributesBlock } from '../../components/guild/AttributesBlock';
import { ParallaxBlock } from '../../components/guild/ParallaxBlock';
import { ProfilesBlock } from '../../components/guild/ProfilesBlock';
import { ValuesBlock } from '../../components/guild/ValuesBlock';
import useMediaQuery from '../../hooks/useMediaQuery';
import InnerSectionBlock from '../../layout/InnerSectionBlock';
import Section from '../../layout/Section';
import { Hero } from '../../sections/Hero';
import {
  position,
  attributs,
  ambitions,
  profils,
  values,
} from '../../utils/AppConfig';

const Guild = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <Index>
      <Hero />
      <div id="start">
        <Section title="attributs" number="01" bgColor="bg-gray-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="flex w-full flex-col">
                <AttributesBlock data={position} />
                <DividerTriangle data={null} index={1} />
                <AttributesBlock data={attributs} />
              </div>
            </InnerSectionBlock>
            <ParallaxBlock image="/assets/images/cloud_city.webp" speed={-15} />
          </div>
        </Section>
        <Section title="valeurs" number="02" bgColor="bg-gray-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="md:max-w-4xl">
                <ValuesBlock data={values} />
              </div>
            </InnerSectionBlock>
            <ParallaxBlock image="/assets/images/city_park.webp" speed={-20} />
          </div>
        </Section>
        <Section title="ambitions" number="03" bgColor="bg-gray-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="md:max-w-md lg:max-w-6xl">
                <AmbitionsBlock data={ambitions} />
              </div>
            </InnerSectionBlock>
            <ParallaxBlock image="/assets/images/spaceship.webp" speed={-25} />
          </div>
        </Section>
        <Section title="profils" number="04" bgColor="bg-gray-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="flex max-w-4xl flex-col md:flex-row md:space-x-16">
                <ProfilesBlock data={profils} isMobile={isMobile} />
              </div>
            </InnerSectionBlock>
          </div>
        </Section>
      </div>
    </Index>
  );
};

export default Guild;
