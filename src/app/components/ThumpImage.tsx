import React from 'react'

const ThumpImage = ({
  title
}: {
  title: string
}) => {

  const backgroundColorList = [
    'bg-gray-800',
    'bg-red-800',
    'bg-blue-800',
    'bg-green-800',
    'bg-amber-800',
    'bg-lime-800'
  ]

  return (
    <div
      className={`p-4 text-center font-bold text-xl aspect-square grid place-items-center ${backgroundColorList[(Math.floor(Math.random() * backgroundColorList.length))]} text-white`}
    >{title.toUpperCase()}</div>
  )
}

export default ThumpImage