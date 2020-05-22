import React from 'react'

export default function Team(props) {
    const { details } = props

    if (!details) {
        return <h3>Working fetching your team&apos;s details...</h3>
    }

    return (
        <div className='team container'>
            <h2>{details.name}</h2>
            <p>Size: {details.size}</p>
            <p>Toppings: {details.toppings}</p>
        </div>
    )
}
