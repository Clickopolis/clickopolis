import * as React from 'react';
import * as classNames from 'classnames';
import Tippy, { TippyProps } from '@tippy.js/react'

export interface IndicatorProps {
    className?: any;
    value?: string | number | React.ReactNode;
    icon?: string;
    iconHeight?: string;
    onClick?: (e:any) => void;
    style?: any;
    id?: string;
    description?: TippyProps['content'];
    label?: string;
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
            className,
            description,
            icon,
            iconHeight,
            id,
            label,
            negativeColor,
            neutralColor,
            onClick,
            positiveColor,
            style,
            value
        } = this.props;

        const indicator = (
            <>{ label != null ? <div style={{ color: 'white', textAlign: 'center' }} className='clickopolis-indicator-label'>{this.props.label}</div> : null }
                <div
                    id={id}
                    onClick={onClick}
                    className={classNames('clickopolis-indicator', className)}
                    style={{
                        backgroundColor: this.determineSignColor(value, positiveColor, negativeColor, neutralColor),
                        borderRadius: '.25rem',
                        textAlign: 'center',
                        padding: '.25rem',
                        ...style,
                    }}
                >
                    {
                        icon ?
                        <img src={ icon } style={{
                            height: iconHeight || '1rem'
                        }} /> : null
                    }
                    {value && <span style={{ margin: '.25rem' }} className='clickopolis-indicator-value'>{ this.formatFunction(value) }</span>}
                </div>
            </>
        )

        return (
            description ? <Tippy
                content={description}
                followCursor={true}
            >
                {indicator}
            </Tippy> : indicator
        );
    }
}