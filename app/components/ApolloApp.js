import CreateWanted from './CreateWanted';
import WantedList from './WantedList';

module.exports = class ApolloApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {wantedList:[], wantedTypes:[]};
		this.updateItems = this.updateItems.bind(this);
	}
	componentDidMount(){
		fetch('/api/v1/wanted')
			.then(result => {
				return result.json();
			})
			.then(result => {				
				this.setState({wantedList:result});
			});
		
		fetch('/api/v1/wanted-type')
			.then(result => {
				return result.json();
			})
			.then(result => {
				this.setState({wantedTypes:result});
			});
	}
	updateItems(newWanted){
		fetch('/api/v1/wanted', {method: 'POST', body: JSON.stringify(newWanted), headers:{'Content-Type':'application/json'} })
			.then(result => result.json() )
			.then(result => {
				var allItems = this.state.wantedList.concat([result]);
				this.setState({wantedList: allItems});
			});
	}
	render(){
		return (
			<div className="mdl-layout mdl-js-layout">
				<header className="mdl-layout__header mdl-layout__header--scroll">
				    <div className="mdl-layout__header-row">
				      <span className="mdl-layout-title">Title</span>
				      <div className="mdl-layout-spacer"></div>
				      <nav className="mdl-navigation">
				        <a className="mdl-navigation__link" href="">Link</a>
				        <a className="mdl-navigation__link" href="">Link</a>
				        <a className="mdl-navigation__link" href="">Link</a>
				        <a className="mdl-navigation__link" href="">Link</a>
				      </nav>
				    </div>
				</header>
				<main className="mdl-layout__content">
					<WantedList wantedList={this.state.wantedList} onFormSubmit={this.updateItems} wantedTypes={this.state.wantedTypes} />
				</main>
			</div>
		);
	}
}