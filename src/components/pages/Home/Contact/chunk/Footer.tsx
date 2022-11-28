import { FC } from 'react';

const Footer: FC = () => {
  return (
    <p className="py-10 text-center">
      || Design by{' '}
      <a
        href="https://dribbble.com/saaddesigns"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-primary hover:underline">Saad</span>
      </a>{' '}
      && coded by{' '}
      <a
        href="http://github.com/supercode0228"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        <span className="text-primary hover:underline">Giovanni</span>
      </a>{' '}
      ||
    </p>
  );
};

export default Footer;
