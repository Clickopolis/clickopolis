import * as React from 'react';
import { classes } from 'typestyle';

export interface ButtonProps {
  icon?: string | React.ReactNode;
  iconHeight?: string;
  id?: string;
  value?: string | number | React.ReactNode;
  className?: string | string[];
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  layout?: string;
  style?: object;
}

export class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  public render() {
    const {
      id,
      onClick,
      className,
      disabled,
      icon,
      iconHeight,
      value,
      style,
      children,
    } = this.props;

    const iconStyles = {
      base: {
        height: iconHeight || '2rem',
      },
      marginRight: {
        marginRight: '4px',
      },
    };

    return (
      <button
        id={id}
        onClick={onClick}
        className={classes(
          'clickopolis-button',
          disabled ? 'disabled' : null,
          className
        )}
        disabled={disabled}
        style={style}
      >
        {typeof icon === 'string' ? (
          <img
            src={icon}
            style={Object.assign(
              iconStyles.base,
              value ? iconStyles.marginRight : {}
            )}
          />
        ) : (
          icon
        )}

        {value && <span className="clickopolis-button-value">{value}</span>}
        {children}
      </button>
    );
  }
}
