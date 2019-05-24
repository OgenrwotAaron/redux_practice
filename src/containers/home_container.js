import React, { Component } from 'react';
import {connect } from 'react-redux';
import { artistListAll } from '../actions';
import { bindActionCreators} from 'redux';

import Search from '../components/search';
import ArtistList from '../components/artistlist'

class HomeContainer extends Component { 

    componentWillMount() {
        this.props.artistListAll()
    }


    getKeywords = (event) => {
        let key = event.target.value;

        console.log(key)
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <ArtistList artists={this.props.artists.artistList}/>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        artists:state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({artistListAll},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);