import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid'

import benefitOneImg from '../../public/img/benefit-one.png'
import benefitTwoImg from '../../public/img/benefit-two.png'

const benefitOne = {
  title: 'Get Captions and Hashtags',
  desc: 'InstaCapt provides you with the perfect captions and trending hashtags for your social media posts. Enhance your content and attract more engagement from your audience.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Understand your audience',
      desc: 'Gain insights into your audience preferences and behaviors to create targeted and effective captions.',
      icon: <FaceSmileIcon />,
    },
    {
      title: 'Boost your reach',
      desc: 'Improve your post visibility and reach a wider audience with the right hashtags for maximum exposure.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Increase engagement',
      desc: 'Drive higher engagement rates by using captivating captions that resonate with your followers.',
      icon: <CursorArrowRaysIcon />,
    },
  ],
}

const benefitTwo = {
  title: 'Enhance Your Social Media Presence',
  desc: 'InstaCapt offers additional benefits to boost your social media presence and make your posts stand out from the crowd.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Mobile-friendly design',
      desc: 'Enjoy a seamless experience on any device with our mobile-responsive template.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'Leverage the latest technologies and tools to create a modern and visually appealing social media presence.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Switch between dark and light mode effortlessly to match your preferred style and enhance readability.',
      icon: <SunIcon />,
    },
  ],
}

export { benefitOne, benefitTwo }
