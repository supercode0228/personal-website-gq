import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className=" fony-bold flex flex-1 flex-col gap-6 p-3 pb-10 pl-10 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        Hii
        <span className="not-italic"> 👋 </span>
        I'am <span className="text-primary"> Giovanni</span>,{' '}
      </Heading3>
      <p className="relative before:absolute before:-left-8 before:font-sans before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>']">
        I am a Senior Software Engineer who has proficient background in{' '}
        <span className="text-primary">Software engineering</span> over 10
        years.
      </p>
      <p>
        While building the project, I mastered HTML5, CSS, JavaScript,
        TypeScript and JS Frameworks and libraries; React, VueJS, AnguarJS and
        NodeJS.
      </p>
      <p>
        Now I have the following skills and desire to learn more. I am looking
        forward to learn about Blockchain, Solidity, and Smart Contracts. Love
        to work on interesting project from Web2 to Web3.
      </p>
      <p className="relative after:absolute after:-left-10 after:font-sans  after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']">
        Now I am actively looking for{' '}
        <span className="text-primary hover:underline">New Opportunities</span>.
        <br /> Love to talk with you.
        <br />
      </p>
    </div>
  );
};
export default InfoSection;
