import React from "react";
//import ReactDOM from 'react-dom';
import Provider from "./provider";
import Context from "./context";
import { Fragment } from "react";

const Agents = () => {
	return <AgentOne />;
};

const AgentOne = () => {
	return <AgentTwo />;
};

const AgentTwo = () => {
	return <AgentBond />;
};

const AgentBond = () => {
	return (
		<Context.Consumer>
			{(context) => (
				<Fragment>
					<h3>Agent Information</h3>
					<p>Mission Name: {context.data.mName}</p>
          <h3>Mission Status: {context.data.accept}</h3>
          <button onClick={context.isMissionAccepted}>Choose to accept</button>
				</Fragment>
			)}
		</Context.Consumer>
	);
};

const App = () => {
	return (
		<div>
			<h1>Context API</h1>
			<Provider>
				<Agents></Agents>
			</Provider>
		</div>
	);
};

export default App;
