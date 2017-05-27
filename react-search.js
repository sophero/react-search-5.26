class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = "search-input">
                <input type="text" placeholder="Type here to search" />
            </div>
        )
    }


}



ReactDOM.render(
    <Search/>,
    document.getElementById('search-input__container')
)
