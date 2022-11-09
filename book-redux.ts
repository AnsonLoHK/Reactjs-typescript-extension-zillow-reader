/* where each component state is dependent on the global state given by book-redux  */

// TODO: Now design the book (components) modules
const mapDispatchToProps: (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => IBookDispatchProps = (dispatch) => {
  return {
    //Action creator from common modules
    selectBook: () => dispatch(selectItem(book)),
    //Action creator from book-redux module
    preview: () => dispatch(bookPreview(book)),
  };
};
const mapStateToProps: (
  appState: IBookAndCommonAppSate,
  props: IBookCompProps
) => IBookCompProps = (appState, props) => {
  //Now in App state state from both the modules are available
  //Calculate new properties for component based on appState.
  return newProps;
};
// TODO?: Here we are wrapping the react component into a redux container using mapStateToProps, mapDispatchToProps and connect function.
export const Book = connect(mapStateToProps, mapDispatchToProps)(DocumentsComp);

/**********************************************************************************/

// TODO 1: book app state
export interface IBookAppState {
  bookPreview: IBookPreviewInfo;
  author: IAuthorInfo;
  publication: IPublicationInfo;
}

export interface ICommonAppState {
  loggedInUser: ILoggedInUser;
  selectedItems: IItem[];
}

// TODO 1: 書的State 跟 整個app共用的state
export type IBookAndCommonAppSate = IBookAppState & ICommonAppState;

//Their respective action creators and reducers
//Combine reducers
//first create ReducerMapObject
export const commonReducerMapObject: ReducerMapObject<ICommonAppState> = {
  loggedInUser: loggedInUserReducer,
  selectedItems: selectedItemsReducer,
};

// TODO 2: commonReducer 結合多個 reducer
export const commonReducer: Reducer<ICommonAppState> = combineReducers(
  commonReducerMapObject
);

//  TODO 3:  把 commonReducer 跟 bookReducer 分在一起
// Let’s design a reducer for book-redux module, which is a combination of commonReducer and bookReducer.
const getRootReducer: () => Reducer<IBookAndCommonAppSate> = () => {
  return function combination(state: IBookAndCommonAppSate, action: AnyAction) {
    const newState: IBookAndCommonAppSate = { ...state };
    //commonReducer
    const commonKeys: string[] = Object.keys(commonReducerMapObject);
    commonKeys.map((key) => {
      newState[key] = commonRootReducerMap[key](newState[key], action);
    });
    //bookReducer
    const bookKeys: string[] = Object.keys(bookReducerMapObject);
    bookKeys.map((key) => {
      newState[key] = bookKeys[key](newState[key], action);
    });
    return newState;
  };
};

//  TODO 3:  把 commonReducer 跟 bookReducer 分在一起 後引導到 bookRootReducer 以作為根的端口
// We can not extend the reducer as it is a value. So following function will return valid reducer value.
export const bookRootReducer: Reducer<IBookAndCommonAppSate> = getRootReducer();

//Their respective actions, action creators and reducers.
//creating ReducerMapObject for book-redux modules
export const bookReducerMapObject: ReducerMapObject<IBookAppState> = {
  bookPreview: IBookPreviewInfoReducer,
  author: IAuthorInfoReducer,
  publication: IPublicationInfoReducer,
};
