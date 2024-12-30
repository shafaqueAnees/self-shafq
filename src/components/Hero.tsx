import React from 'react';
import Car from './Car';
import Pick from './Switcher';

const Hero = () => {
  return (
    <section className="space-y-6 sm:space-y-10 px-4 md:px-8 lg:px-16 w-full">
      {/* Car Component */}
      <Car />

      {/* Pick Component */}
      <Pick />
    </section>
  );
};

export default Hero;
