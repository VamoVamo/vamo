import React from 'react';
import './dummy.css';

interface DummyProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the Dummy be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Dummy contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Dummy = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: DummyProps) => {
  const mode = primary ? 'storybook-dummy--primary' : 'storybook-dummy--secondary';
  return (
    <button
    type="button"
    className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
  );
};
