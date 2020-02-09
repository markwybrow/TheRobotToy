import React from 'react';
import { FaSearch, FaTachometerAlt } from 'react-icons/fa';
import {
	FormCommandStringWrapper,
	FormGridWrapper,
	FormRobotControlPanel,
} from '../form';

const MainContent = props => {
	return (
		<div className="wrapper content">
			<div className="tile is-ancestor row">
				<div className="tile is-vertical is-8 col-md-6 pull-left">
					<div className="tile">
						<div className="tile is-parent is-vertical">
							<nav className="panel is-info">
								<p className="panel-heading">
									<span className="panel-icon">
										<FaTachometerAlt size="1.5em" className="icon--white" />
									</span>
									Set game board dimensions
								</p>
								<FormGridWrapper {...props} />
							</nav>
						</div>
						<div className="tile is-parent is-vertical">
							<nav className="panel panel-info">
								<p className="panel-heading">
									<span className="panel-icon">
										<FaTachometerAlt size="1.8em" />
									</span>{' '}
									Manual Control commands
								</p>
								<FormRobotControlPanel {...props} />
							</nav>

							<nav className="panel">
								<p className="panel-heading">
									<span className="panel-icon">
										<FaSearch size="1.5em" />
									</span>
									Create string of commands
								</p>
								<FormCommandStringWrapper
									placeholder="Add your commands here"
									{...props}
								/>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
