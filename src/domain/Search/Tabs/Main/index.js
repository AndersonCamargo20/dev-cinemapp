import React from 'react';
import Button from '../../../../component/Button';
import InputComponent from '../../../../component/Input';
import {
  Container,
  Content,
  Message,
  FooterButton,
  Footer,
  FooterButtonDouble,
} from '../../style';
import {FlatList} from 'react-native';
import {ListMovies} from '../../../../component/List';
import Loading from '../../../../component/Loading';
const TabMain = (props) => {
  const {
    search,
    handleChange,
    onSubmit,
    loading,
    movies,
    refreshing,
    handleRefresh,
    nextPage,
    handleFavorite,
    handlePagination,
    blocknextPage,
    listImd,
  } = props;
  return (
    <Container>
      <Content>
        <InputComponent
          label="Buscar"
          placeholder="Batman"
          value={search}
          onChangeText={handleChange}
          helper="Pressione para adicionar aos favoritos"
        />
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            onRefresh={() => handleRefresh(true)}
            refreshing={refreshing}
            removeClippedSubviews={true}
            windowSize={20}
            maxToRenderPerBatch={20}
            updateCellsBatchingPeriod={6}
            data={movies?.Search}
            renderItem={({index, item}) => (
              <ListMovies
                title={item.Title}
                value={item.Year}
                type={item.Type}
                poster={item.Poster}
                onRowPress={() => handleFavorite(index)}
                favorite={listImd.includes(item.imdbID)}
              />
            )}
            keyExtractor={(item) => item.imdbID}
            // onEndReached={handlePagination}
            // onEndReachedThreshold={0.2}
          />
        )}
        {movies?.Search?.length && (
          <Message>{`Página atual: ${nextPage}`}</Message>
        )}
      </Content>
      {movies?.Search?.length && (
        <Footer>
          {nextPage !== 1 && (
            <FooterButtonDouble>
              <Button
                onPress={() => handlePagination(false)}
                disabled={loading}
                secondary
                title="<< Pág. Anterior"
              />
            </FooterButtonDouble>
          )}
          {!blocknextPage && (
            <FooterButtonDouble>
              <Button
                onPress={() => handlePagination()}
                disabled={loading}
                secondary
                title="Próx. Página >>"
              />
            </FooterButtonDouble>
          )}
        </Footer>
      )}
      <Footer>
        <FooterButton>
          <Button
            onPress={onSubmit}
            disabled={loading}
            loading={loading}
            title="Realizar Busca"
          />
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default TabMain;
