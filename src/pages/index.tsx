import { type NextPage } from 'next'

import { PageLayout } from '~/components/layout'
import Example from './example'

const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <Example />
      </PageLayout>
    </>
  )
}

export default Home
