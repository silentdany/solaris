// eslint-disable-next-line import/no-cycle
import Index from '..';
import { DividerTriangle } from '../../components/DividerTriangle';
import { DataBlock } from '../../components/guild/DataBlock';
import { DNABlock } from '../../components/guild/DNABlock';
import { ParallaxBlock } from '../../components/guild/ParallaxBlock';
import { ProfilesBlock } from '../../components/guild/ProfilesBlock';
import { ProjectBlock } from '../../components/guild/ProjectBlock';
import { ResourcesBlock } from '../../components/guild/ResourcesBlock';
import useMediaQuery from '../../hooks/useMediaQuery';
import InnerSectionBlock from '../../layout/InnerSectionBlock';
import Section from '../../layout/Section';
import { Hero } from '../../sections/Hero';
import { Meta } from '../../sections/Meta';
import {
  position,
  datas,
  project,
  profiles,
  dna,
  resources,
  AppConfig,
} from '../../utils/AppConfig';

export const GuildContent = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Meta
        title="Guilde/DAC française sur Star Atlas"
        description={AppConfig.description}
        canonical={AppConfig.url}
      />
      <Hero />
      <div id="start">
        <Section title="Données" number="01" bgColor="bg-stone-50" uppercase>
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'} topBorder>
              <div className="flex w-full flex-col">
                <DataBlock data={position} />
                <DividerTriangle index={1} />
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
    </>
  );
};

const Guild = () => {
  return (
    <Index>
      <GuildContent />
    </Index>
  );
};

export default Guild;
