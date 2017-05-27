class Search extends React.Component {

    constructor(props) {
        super(props);
        this.arrayToSearch = props.array;
        this.state = {
            resultsArray: []
        }

        this.searchTitles = this.searchTitles.bind(this);
    }

    render() {

        let results = this.state.resultsArray.map(function(obj, index) {
            return <div key={index}>{obj.title}</div>
        });

        return(
            <div>
                <input onChange={this.searchTitles} className='search-input' type="text" placeholder="Type here to search" />
                <div className="search-results">
                    {results}
                </div>
            </div>
        )

    }

    searchTitles() {
        let strToSearch = document.getElementsByClassName('search-input')[0].value.toLowerCase();
        let filteredArray = this.arrayToSearch.filter(function(obj) {
            return obj.title.toLowerCase().includes(strToSearch);
        });
        console.log(filteredArray);
        this.setState({resultsArray: filteredArray});
    }

}

let movieCollection = [

	{
		title: "Casablanca",
		year: 1942
	},
	{
		title: "Chinatown",
		year: 1974
	},
	{
		title: "Citizen Kane",
		year: 1941
	},
	{
		title: "The Notebook",
		year: 2004
	},
	{
		title: "La La Land",
		year: 2016
	},
	{
		title: "Dune",
		year: 1984
	},
	{
		title: "Easy Rider",
		year: 1969
	},
	{
		title: "Tron",
		year: 1982
	},
	{
		title: "Jodorowsky's Dune",
		year: 2013
	},
	{
		title: "Zardoz",
		year: 1974
	},
	{
		title: "Avatar",
		year: 2009
	},
	{
		title: "The Rocky Horror Picture Show",
		year: 1975
	},
	{
		title: "The Last Airbender",
		year: 2010
	}

]

ReactDOM.render(
    <Search array={movieCollection}/>,
    document.getElementById('search-input__container')
)
