import { type NextPage } from 'next'

import { PageLayout } from '~/components/layout'
import Hero from '~/components/hero'
import SectionTitle from '~/components/sectionTitle'
import Benefits from '~/components/benefits'
import { benefitOne, benefitTwo } from '~/components/data'

const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <Hero />
        <SectionTitle
          pretitle="InstaCapt Benefits"
          title="Why choose InstaCapt?"
        >
          InstaCapt is a powerful platform that provides you with the perfect
          captions and trending hashtags for your social media posts. Enhance
          your content and attract more engagement from your audience. Built
          with Next.js & TailwindCSS, InstaCapt is a free and open-source tool
          designed for startups and indie projects.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </PageLayout>
    </>
  )
}

export default Home
