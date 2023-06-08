import { type PropsWithChildren } from 'react'

type PageLayoutProps = PropsWithChildren<{
  className?: string
}>

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <div
      className={`container mx-auto p-8 xl:px-0 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}
