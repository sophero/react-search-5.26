class DisplayResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultsArray: props.results
        }
    }

    render() {

        let results = this.state.resultsArray.map(function(obj, index) {
            return <div key={index}>{obj.title}</div>
        });

        return(
            <div className="search-results">
                {results}
            </div>
        )
    }

    componentWillReceiveProps(newProps) {
        this.setState({resultsArray: newProps.results});
    }
}
