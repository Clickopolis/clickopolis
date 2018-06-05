import * as React from 'react';
import { connect } from 'react-redux';

import './Login.scss';

export interface LoginProps {

}

export class LoginBase extends React.Component<LoginProps> {
    constructor(props:LoginProps) {
        super(props);
    }

    public render() {
        return (
            <div>

            </div>
        );
    }
}

export const Login = connect(
    null,
    null
)(LoginBase);
