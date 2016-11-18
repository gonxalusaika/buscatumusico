import Wanted from './Wanted';
import CreateWanted from './CreateWanted';

module.exports = class WantedList extends React.Component {
	render(){
		return <div className="mdl-grid">
			<CreateWanted onFormSubmit={this.props.onFormSubmit} wantedTypes={this.props.wantedTypes} />
			{this.props.wantedList.map(function(w){
				return <Wanted key={w.id} wanted={w} />
			})}
		</div>
	}
}