import * as React from 'react';
import classNames from 'classnames';
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
    tooltipProps?: Partial<TippyProps>;
}

function determineSignColor (v:any, positiveColor: string, negativeColor: string = '#ff6347', neutralColor: string = '#222') {
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

function ff (v: any, formatFunction: IndicatorProps['formatFunction']) {
    if (formatFunction == null) {
        return (typeof v === 'number') ? v.toFixed(0) : v;
    } else {
        return formatFunction(v);
    }
}

export function Indicator (props: IndicatorProps) {

    const {
        className,
        description,
        icon,
        iconHeight,
        id,
        label,
        negativeColor,
        neutralColor,
        formatFunction,
        onClick,
        positiveColor,
        style,
        tooltipProps,
        value
    } = props;

    const ttp = tooltipProps ? tooltipProps : {}

    const indicator = (
        <div>
            { label != null ? <div style={{ color: 'white', textAlign: 'center' }} className='clickopolis-indicator-label'>{label}</div> : null }
            <div
                id={id}
                onClick={onClick}
                className={classNames('clickopolis-indicator', className)}
                style={{
                    backgroundColor: determineSignColor(value, positiveColor, negativeColor, neutralColor),
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
                {value && <span style={{ margin: '.25rem' }} className='clickopolis-indicator-value'>{ ff(value, formatFunction) }</span>}
            </div>
        </div>
    )

    return (
        description ? <Tippy
            content={description}
            followCursor={true}
            {...ttp}
        >
            {indicator}
        </Tippy> : indicator
    );
}