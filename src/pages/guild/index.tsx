import Index from '..';
import { DividerTriangle } from '../../components/DividerTriangle';
import { DataBlock } from '../../components/guild/AttributesBlock';
import { DNABlock } from '../../components/guild/DNABlock';
import { ParallaxBlock } from '../../components/guild/ParallaxBlock';
import { ProfilesBlock } from '../../components/guild/ProfilesBlock';
import { ProjectBlock } from '../../components/guild/ProjectBlock';
import { ResourcesBlock } from '../../components/guild/ResourcesBlock';
import useMediaQuery from '../../hooks/useMediaQuery';
import InnerSectionBlock from '../../layout/InnerSectionBlock';
import Section from '../../layout/Section';
import { Hero } from '../../sections/Hero';
import {
  position,
  datas,
  project,
  profiles,
  dna,
  resources,
} from '../../utils/AppConfig';

const Guild = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <Index>
      <Hero />
      <div id="start">
        <Section title="Données" number="01" bgColor="bg-stone-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'} topBorder>
              <div className="flex w-full flex-col">
                <DataBlock data={position} />
                <DividerTriangle data={null} index={1} />
                <DataBlock data={datas} />
              </div>
            </InnerSectionBlock>
            <ParallaxBlock image="/assets/images/cloud_ship.webp" speed={-10} />
          </div>
        </Section>
        <Section title="ADN" number="02" bgColor="bg-stone-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'} topBorder>
              <div className="md:max-w-4xl">
                <DNABlock data={dna} />
              </div>
            </InnerSectionBlock>
            <ParallaxBlock image="/assets/images/downtown.webp" speed={-10} />
          </div>
        </Section>
        <Section title="Projet" number="03" bgColor="bg-stone-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'} topBorder>
              <div className="md:max-w-md lg:max-w-6xl">
                <ProjectBlock data={project} />
                <DividerTriangle data={null} index={1} />
                <div className="flex flex-col py-16">
                  <p className="mb-2 border-b-[1px] border-primary-300 font-title text-2xl md:text-3xl lg:text-4xl">
                    <span className="font-hero">
                      Sol<span className="text-primary-500">a</span>ris
                    </span>{' '}
                    est une aventure alliant plaisir{' '}
                    <strong className="text-primary-500">et</strong>{' '}
                    performance.
                  </p>
                  <p className="lg:text-xl">
                    Sa volonté est de rayonner à travers l’univers de Star Atlas
                    et au-delà !
                  </p>
                </div>
              </div>
            </InnerSectionBlock>
            <ParallaxBlock
              image="/assets/images/sunset_city.webp"
              speed={-10}
            />
          </div>
        </Section>
        <Section title="Ressources" number="04" bgColor="bg-stone-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'} topBorder>
              <div className="w-full md:max-w-6xl">
                <ResourcesBlock data={resources} />
              </div>
            </InnerSectionBlock>
            <ParallaxBlock image="/assets/images/forest.webp" speed={-10} />
          </div>
        </Section>
        <Section title="Profils" number="05" bgColor="bg-stone-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'} topBorder>
              <div className="flex max-w-6xl flex-col md:flex-row md:space-x-16">
                <ProfilesBlock data={profiles} isMobile={isMobile} />
              </div>
            </InnerSectionBlock>
          </div>
        </Section>
      </div>
    </Index>
  );
};

export default Guild;
