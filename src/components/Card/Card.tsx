import React from 'react'
import { CardProps } from './Card.types';
import "./cards.css"

export const Card = ({children}:CardProps) => {
  return (
    <div>
      Card with Children
      {children}
    </div>
  )
}