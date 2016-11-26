const USER_DATA = {
    name: 'John Hamptones',
    username: 'jjhamptones',
    image: 'http://lorempixel.com/200/200/people/'
}

const React = require('react');
const ReactDOM = require('react-dom');

const ProfilePic = (props) => {
    return <img src={props.imageUrl} style={{height: 100, width: 100}} />;
};

const ProfileLink = (props) => {
    return (
        <div>
            <a href={`https://www.github.com${props.username}`}>
                {props.username}
            </a>
        </div>
    )
};

const ProfileName = (props) => {
    return (
        <div>{props.name}</div>
    );
};

const Avatar = (props) => {
    return (
        <div>
            <ProfilePic imageUrl={props.user.image} />
            <ProfileName name={props.user.name} />
            <ProfileLink username={props.user.username} />
        </div>
    );
};

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);