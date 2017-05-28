class DisplayResults extends React.Component {

    constructor(props) {
        super(props);
        this.results = props.results
    }

    render() {

        let results = this.results.map(function(obj, index) {
            return <div key={index}>{obj.title} ({obj.year})</div>
        });

        return(
            <div className="search-results">
                {results}
            </div>
        )
    }

    componentWillReceiveProps(newProps) {
        this.results = newProps.results;
    }
}
