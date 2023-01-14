import { GradientText } from '@/components/GradientText';
import { HeroSocial } from '@/components/HeroSocial';
import { Section } from '@/components/Section';

const CTA = () => (
  <Section>
    <div className="flex flex-row items-center justify-between gap-6 sm:flex-col">
      <div className="sm:w-7/12">
        <div className="text-3xl font-bold">
          Connect with <GradientText> Anton </GradientText> on
          <a href="https://twitter.com/antonosika">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/antonosika/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { CTA };
