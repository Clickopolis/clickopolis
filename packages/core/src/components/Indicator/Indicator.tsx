import * as React from 'react';
import * as classNames from 'classnames';

export interface IndicatorProps {
    className?: any;
    value?: string | number | React.ReactNode;
    icon?: string;
    iconHeight?: string;
    onClick?: (e:any) => void;
    style?: any;
    id?: string;
    description?: string;
    formatFunction?: (v: string | number | React.ReactNode) => string | number | React.ReactNode;
    positiveColor?: string;
    negativeColor?: string;
    neutralColor?: string;
}

export class Indicator extends React.PureComponent<IndicatorProps> {
    constructor(props:IndicatorProps) {
        super(props);
    }

    private determineSignColor (v:any, positiveColor: string, negativeColor: string = '#ff6347', neutralColor: string = '#222') {
        if (typeof v === 'number') {
            if (v > 0) {
                return positiveColor;
            } else if (v < 0) {
                return negativeColor;
            } else {
                return neutralColor;
            }
        } else {
            return neutralColor;
        }
    }

    private formatFunction (v: any) {
        if (this.props.formatFunction == null) {
            return (typeof v === 'number') ? v.toFixed(0) : v;
        } else {
            return this.props.formatFunction(v);
        }
    }

    public render() {
        const {
            id,
            onClick,
            className,
            icon,
            iconHeight,
            value,
            style,
            positiveColor,
            negativeColor,
            neutralColor
        } = this.props;
        return <div
                    id={id}
                    onClick={onClick}
                    className={classNames('clickopolis-indicator', className)}
                    style={{
                        ...style,
                        backgroundColor: this.determineSignColor(value, positiveColor, negativeColor, neutralColor),
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '.25rem',
                        display: 'flex',
                        textAlign: 'center',
                        padding: '.25rem'
                    }}
                >
                    {
                        icon ?
                        <img src={ icon } style={{
                            height: iconHeight || '1rem'
                        }} /> : null
                    }
                    <span style={{ margin: '.25rem' }} className='clickopolis-indicator-value'>{ this.formatFunction(value) }</span>
                </div>;
    }
}