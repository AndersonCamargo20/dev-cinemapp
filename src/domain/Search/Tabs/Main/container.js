import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TabMain from './index';
import {Creators as CreatorSearch} from '../../ducks';

class TabMainContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      refreshing: false,
      nextPage: 1,
      blocknextPage: false,
    };

    this.handleBlcokPagination = this.handleBlcokPagination.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  UNSAFE_componentWillMount() {
    const {setLoading, setMovies} = this.props;

    setLoading(false);
    setMovies([]);
  }

  handleChange = (value) => {
    this.setState({search: value});
  };

  onSubmit = () => {
    const {getMovies, loading} = this.props;
    const {search} = this.state;

    if (loading) return;

    this.setState({nextPage: 1}, () => {
      getMovies(search, this.state.nextPage, this.handleBlcokPagination);
    });
  };

  handleBlcokPagination = () => {
    const {movies} = this.props;
    const {nextPage} = this.state;
    let block = false;
    const total = 10 * (nextPage + 1);

    if (movies?.Search?.length && total >= movies?.totalResults) {
      block = true;
    }

    this.setState({blocknextPage: block});
    return block;
  };

  handleRefresh = async (resetPagination) => {
    const {getMovies, loading} = this.props;
    const {search} = this.state;

    if (loading) return null;

    if (resetPagination) await this.setState({refreshing: true, nextPage: 1});
    else await this.setState({nextPage: this.state.nextPage + 1});

    const finish = await getMovies(
      search,
      this.state.nextPage,
      this.handleBlcokPagination,
    );

    if (finish) this.setState({refreshing: false});
  };

  handlePagination = async (proxPagination = true) => {
    const {getMovies, loading} = this.props;
    const {search} = this.state;
    if (loading) return null;

    const changePage = proxPagination
      ? this.state.nextPage + 1
      : this.state.nextPage - 1;

    await this.setState({nextPage: changePage});

    const finish = await getMovies(
      search,
      this.state.nextPage,
      this.handleBlcokPagination,
    );

    if (finish) this.setState({refreshing: false});
  };

  handleFavorite = (index) => {
    const {movies, selectFavorites} = this.props;
    selectFavorites({...movies?.Search[index]});
  };

  render() {
    return (
      <TabMain
        handleChange={this.handleChange}
        onSubmit={this.onSubmit}
        handleRefresh={this.handleRefresh}
        handleFavorite={this.handleFavorite}
        handlePagination={this.handlePagination}
        {...this.state}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.search.data,
  loading: state.search.loading,
  listImd: state.search.listImd,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({...CreatorSearch}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabMainContainer);
