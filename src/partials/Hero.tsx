import { GradientText } from '@/components/GradientText';
import { Section } from '@/components/Section';

import { HeroAboutMe } from './HeroAvatar';

const Hero = () => (
  <Section>
    <HeroAboutMe
      title={
        <>
          Hi there, I'm <GradientText>Anton</GradientText> 👋
        </>
      }
      description={
        <>
          I'm passionate about humanity's future, and what we can do to make it
          amazing. Me and Oliver founded Depict.ai (YC S20), currently 35
          people, that is on a mission to help people find the product and
          brands they love; by democratizing access to next level product
          discovery experiences. I'm an aspiring effective altruist. This
          website is about incrementally improving my own world model, and
          trying to help others do the same.
        </>
      }
      // avatar={
      //   <img
      //     className="h-80 w-64"
      //     src="/assets/images/avatar.svg"
      //     alt="Avatar image"
      //     loading="lazy"
      //   />
      // }
      socialButtons={''}
    />
  </Section>
);

export { Hero };
