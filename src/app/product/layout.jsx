import React from 'react'

export const metadata = {
    title: "Product",
    description: "about page"
}

const layout = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout