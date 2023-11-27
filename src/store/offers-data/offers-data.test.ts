import { offersData } from './offers-data';
import {RequestStatus} from '../../const';

const expectedState = {
  offers: [],
  nearPlaces: [],
  activeOffer: null,
  offerStatus: RequestStatus.Idle,
  fetchingStatus: RequestStatus.Idle,
  nearPlacesStatus: RequestStatus.Idle,
};

describe('OffersData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = offersData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = offersData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  // it('should reset game with "resetGame" action', () => {
  //   const initialState = { mistakes: 333, step: 10 };
  //   const expectedState = { mistakes: 0, step: FIRST_GAME_STEP };

  //   const result = offersData.reducer(initialState, offersData);

  //   expect(result).toEqual(expectedState);
  // });
});


//     const result = gameData.reducer(undefined, fetchQuestionAction.pending);

//     expect(result).toEqual(expectedState);
//   });

//   it('should set "questions" to array with question, "isQuestionsDataLoading" to "false" with "fetchQuestionAction.fulfilled"', () => {
//     const mockArtistQuestion = makeFakeArtistQuestion();
//     const expectedState = {
//       questions: [mockArtistQuestion],
//       isQuestionsDataLoading: false,
//       hasError: false,
//     };

//     const result = gameData.reducer(
//       undefined,
//       fetchQuestionAction.fulfilled(
//         [mockArtistQuestion], '', undefined)
//     );

//     expect(result).toEqual(expectedState);
//   });

//   it('should set "isQuestionsDataLoading" to "true", "hasError" to "true" with "fetchQuestionAction.rejected', () => {
//     const expectedState = {
//       questions: [],
//       isQuestionsDataLoading: false,
//       hasError: true,
//     };

//     const result = gameData.reducer(
//       undefined,
//       fetchQuestionAction.rejected
//     );

//     expect(result).toEqual(expectedState);
//   });
// });
