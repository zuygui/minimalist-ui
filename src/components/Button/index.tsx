import React from 'react'

export type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
}

export function Button(props: ButtonProps): JSX.Element {
  return <button {...props}>{props.children}</button>
}
