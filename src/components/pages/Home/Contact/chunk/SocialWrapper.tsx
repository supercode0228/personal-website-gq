import { FC } from 'react';
import SocialButton from './SocialButton';

const SocialWrapper: FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 py-16 md:flex-nowrap md:gap-10 md:pb-20 md:pt-48">
      <SocialButton
        text="LinkedIn"
        href="https://www.linkedin.com/in/giovanni-quebral-417760232/"
        className={{
          x: 'md:-translate-x-16',
          y: 'md:-translate-y-36',
          size: 'w-32 md:w-60',
        }}
      />
      <SocialButton
        text="Github"
        href="https://github.com/supercode0228"
        className={{
          x: 'md:-translate-x-12',
          y: 'md:translate-y-16',
          size: 'w-32 md:w-44',
        }}
      />
      <SocialButton
        text="Mail"
        href="mailto:giovanni900623@gmail.com"
        className={{
          x: 'md:-translate-x-10',
          y: 'md:-translate-y-36',
          size: 'w-32 md:w-56',
        }}
      />
      <SocialButton
        text="Phone"
        href="tel:+14158004757"
        className={{
          x: 'md:-translate-x-20',
          y: 'md:translate-y-20',
          size: 'w-32 md:w-40',
        }}
      />
    </div>
  );
};

export default SocialWrapper;
