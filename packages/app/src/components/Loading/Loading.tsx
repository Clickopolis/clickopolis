import * as React from 'react';

import './Loading.scss';

export interface LoadingProps {

}

export class Loading extends React.Component<LoadingProps> {
    constructor(props:LoadingProps) {
        super(props);
    }

    public render() {
        return <div />
    }
}
