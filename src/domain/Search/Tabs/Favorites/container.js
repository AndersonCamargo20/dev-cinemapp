import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TabMain from './index';
import {Creators as CreatorSearch} from '../../ducks';

class TabMainContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite = (index) => {
    const {favorites, selectFavorites} = this.props;
    selectFavorites({...favorites[index]});
  };

  render() {
    return (
      <TabMain
        {...this.state}
        {...this.props}
        handleFavorite={this.handleFavorite}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.search.data,
  favorites: state.search.favorites,
  loading: state.search.loading,
  listImd: state.search.listImd,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({...CreatorSearch}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabMainContainer);
