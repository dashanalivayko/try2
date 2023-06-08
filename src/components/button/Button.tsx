import React, { FC } from 'react'
import './button.css'
import { sum } from './sum'

interface IProps {
    primary?: boolean
    backgroundColor?: string | null
    size?: string
    label: string
}
/**
 * Primary UI component for user interaction
 */

export const Button: FC<IProps> = ({
    primary,
    backgroundColor,
    size,
    label,
    ...props
}) => {
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary'

    const onClick = () => {
        console.log(sum(4, 5))
    }

    return (
        <button
            type="button"
            className={[
                'storybook-button',
                `storybook-button--${size}`,
                mode,
            ].join(' ')}
            style={{ backgroundColor: backgroundColor || 'green' }}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    )
}
