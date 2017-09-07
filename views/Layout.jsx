import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Layout extends React.Component {
    constructor (props) {
        super(props);
        this._handleClick = this._handleClick.bind(this)
    }
    _handleClick () {
        console.log(this.props.custom);
    }
    render() {
        const { custom } = this.props;
        return (
            <html>
                <head>
                    <title>黄庆华很帅气</title>
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    <h1>{custom.title}</h1>
                    <p>Isn't server-side rendering remarkable?</p>
                    <button onClick={this._handleClick}>Click Me</button>
                    {this.props.children}
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                    {/* <img src={require('/image/dnd.png')} /> */}
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
}

const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

export default wrapper(Layout);
