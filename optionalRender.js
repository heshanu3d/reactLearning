import React, {Component} from 'react';
import './App.css';

function UserGreeting(props) {
  return (
  	<div className="event-button">
  	<h1>Welcome back!</h1>
  	</div>);
}

function GuestGreeting(props) {
  return (
  	<div className="event-button">
  	<h1>Please sign up.</h1>
  	</div>);
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn
	if(isLoggedIn) {
		return <UserGreeting />;
	}else {
		return <GuestGreeting />;
	}
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div>
      Warning!
    </div>
  );
}


class LoginControl extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
		// this.handleLoginClick = this.handleLoginClick.bind(this);
  //   	this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick = () => {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick = () => {
		this.setState({isLoggedIn: false});
	}

	// handleLoginClick() {
	//     this.setState({isLoggedIn: true});
	// }

	//   handleLogoutClick() {
	//     this.setState({isLoggedIn: false});
	// }	

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button = null;
		if(isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />
		}else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}
		return (
			<div className = "event-button">
	        <Greeting isLoggedIn={isLoggedIn} />
	        {button}
	        {isLoggedIn &&
	        <Mailbox unreadMessages={messages} />
	        }
	        <div>
      			The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    		</div>
    		<WarningBanner warn={isLoggedIn}/>
	      	</div>
	      )
	}
}

// export default Greeting;
export default LoginControl;