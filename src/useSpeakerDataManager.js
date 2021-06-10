import speakersReducer from './speakersReducer';
import axios from 'axios';
import { useEffect, useReducer, useContext } from 'react';
import { InitialSpeakersDataContext } from '../pages/speakers'

function useSpeakerDataManager() {
  const initialSpeakerData = useContext(InitialSpeakersDataContext);

  // const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
  //   isLoading: false,
  //   speakerList: initialSpeakerData,
  // });

  const [{ isLoading,
    speakerList,
    favoriteClickCount,
    hasError,
    error,
    imageRerenderIdentifier },
    dispatch] = useReducer(speakersReducer, {
      isLoading: true,
      speakerList: [],
      favoriteClickCount: 0,
      hasError: false,
      error: null,
      imageRerenderIdentifier: 0
    });

  function incrementFavoriteClickCount() {
    dispatch({ type: 'incrementFavoriteClickCount' });
  }

  function forceImageRerender() {
    dispatch({
      type: 'forceImageRerender'
    })
  }

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      axios.put(`/api/speakers/${speakerRec.id}`, {
        ...speakerRec,
        favorite: !speakerRec.favorite,
      });
      speakerRec.favorite === true
        ? dispatch({ type: 'unfavorite', id: speakerRec.id })
        : dispatch({ type: 'favorite', id: speakerRec.id });
    };
    updateData();
  }

  useEffect(() => {
    const fetchData = async function () {
      try {
        let result = await axios.get('/api/speakers');
        dispatch({ type: 'setSpeakerList', data: result.data });
      } catch (e) {
        dispatch({
          type: 'error',
          error: e
        })
      }
    };
    fetchData();
    return () => {
      console.log('cleanup');
    };
  }, []);
  return {
    isLoading,
    speakerList,
    favoriteClickCount,
    incrementFavoriteClickCount,
    toggleSpeakerFavorite,
    hasError,
    error,
    forceImageRerender,
    imageRerenderIdentifier
  };
}
export default useSpeakerDataManager;