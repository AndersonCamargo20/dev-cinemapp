import React from 'react';
import {Container, Content} from '../../style';
import {FlatList} from 'react-native';
import {ListMovies} from '../../../../component/List';
import Loading from '../../../../component/Loading';
import Empty from '../../../../component/Empty';
import uuidv4 from 'uuid/v4';

const TabFavorites = (props) => {
  const {loading, favorites, listImd, handleFavorite} = props;
  console.log('listImd: ', JSON.stringify(listImd));
  return (
    <Container>
      <Content>
        {!favorites?.length ? (
          <Empty message="Nenhuma obra para visualizar" />
        ) : loading ? (
          <Loading />
        ) : (
          <FlatList
            removeClippedSubviews={true}
            windowSize={20}
            maxToRenderPerBatch={20}
            updateCellsBatchingPeriod={6}
            data={favorites}
            renderItem={({index, item}) => (
              <ListMovies
                title={item?.Title}
                value={item?.Year}
                type={item?.Type}
                poster={item?.Poster}
                onRowPress={() => handleFavorite(index)}
                favorite={listImd.includes(item.imdbID)}
              />
            )}
            keyExtractor={(item) => uuidv4()}
          />
        )}
      </Content>
    </Container>
  );
};

export default TabFavorites;
