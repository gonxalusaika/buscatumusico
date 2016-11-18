import Componente from './components/Componente';
import ApolloApp from './components/ApolloApp';


class App extends React.Component {
	render(){
		return <ApolloApp />
	}
}

ReactDOM.render(<App />, document.getElementById('app'));