import * as React from 'react';
import { Tooltip } from 'react-tippy';

/**
 * Takes a string with a format such as
 *   This is a description with [faith] inserted
 * And takes the part in brackets and converts it to an image
 * It will use the inner contents of said bracketed element
 * Useful to store pure text wihout using innerHTML
 * @param str - a string to regexify
 */
export const addImages = (str: string) => {
    const m = str.match(/\[.{1,20}\]/g)
    const matches = m && m.map(s => s.replace(/(\[|\])/g, ''))
    const parts = str.split(/\[.{1,20}\]/g)

    //console.log(matches, parts)
    
    const image = (str: string) => <Tooltip title={str}>
        <img style={{height: '1rem'}} src={`./images/${str}.svg`} />
    </Tooltip>;

    const arr = [
        parts[0],
        matches?.[0] && image(matches[0]),
        parts[1],
        matches?.[1] && image(matches[1]),
    ];

    return arr
}