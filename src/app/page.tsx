"use client";
import Apps from '@/components/Apps';
import DOAs from '@/components/DOAs';
import Features from '@/components/Features';
import RobotTaskFlow from '@/components/Featuresmob';
import HeroSection from '@/components/HeroSection';
import Tokenomics from '@/components/Tokenomics';
import Works from '@/components/Works';
const Page = () => {
  return (
    <div className=''>
      <HeroSection />
      <RobotTaskFlow />
      <Works />
      <Features />
      <Apps />
      <div className='md:px-20 pt-20'>
      <div className='bg-[#080D19] rounded-2xl mx-auto'>
      <Tokenomics />
      <DOAs />
      </div></div>
    </div>
  )
}

export default Page