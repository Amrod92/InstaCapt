import React from 'react'
import Image, { ImageProps } from 'next/image'
import { PageLayout } from './layout'

interface Benefit {
  title: string
  icon: React.ReactElement
  desc: string
}

interface BenefitsType {
  data: {
    image: {
      src: string
      width: number
      height: number
    }
    imgPos?: string
    title: string
    desc: string
    bullets: Benefit[]
  }
  imgPos?: string
}

const Benefits: React.FC<BenefitsType> = (props) => {
  const { data, imgPos } = props

  return (
    <>
      <PageLayout className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2 ${
            imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={data.image.src}
              width={data.image.width}
              height={data.image.height}
              alt="Benefits"
              className="object-cover"
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 ${
            data.imgPos === 'right' ? 'lg:justify-end' : ''
          }`}
        >
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
                {data.desc}
              </p>
            </div>

            <div className="mt-5 w-full">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

interface BenefitProps {
  title: string
  icon: React.ReactElement
  children: React.ReactNode
}

const Benefit: React.FC<BenefitProps> = (props) => {
  return (
    <>
      <div className="mt-8 flex items-start space-x-3">
        <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500">
          {React.cloneElement(props.icon, {
            className: 'w-7 h-7 text-indigo-50',
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  )
}

export default Benefits
