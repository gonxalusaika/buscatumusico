module.exports = class Wanted extends React.Component {
	render(){
		return <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
			  <div className="mdl-card__title mdl-card--expand">
			    <h2 className="mdl-card__title-text">{this.props.wanted.name}</h2>
			  </div>
			  <div className="mdl-card__supporting-text">
			  {this.props.wanted.description}
			  </div>
			  <div className="mdl-card__actions mdl-card--border">
			    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
			      View Updates
			    </a>
			  </div>
			</div>
	}
}