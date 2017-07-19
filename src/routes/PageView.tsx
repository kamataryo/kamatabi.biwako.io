import * as React from 'react'

interface Props {
}

const PageView = (props: Props) => {

  return (
    <div className={ 'page-view' }>
      <h1>{ 'page title' }</h1>
      <p>{ 'page content' }</p>
      <div>{ props.toString() }</div>
    </div>
  )
}
export const createPageView = (props: Props) => () => <PageView { ...props } />
export default PageView
