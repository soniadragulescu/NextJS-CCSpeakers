import ImageToggleOnScroll from './ImageToggleOnScroll'
import React from 'react'
import {useContext} from 'react'
import useSpeakerDataManager from './useSpeakerDataManager'
import {GlobalContext} from './GlobalState'
import { favoriteClickCountContext } from './FavoriteClickCountContext'

const SpeakerDetail = React.memo(({
  speakerRec, onHeartFavoriteHandler
}) => {
  const { id, firstName, lastName, favorite, bio } = speakerRec;
  console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
  const {
     incrementFavoriteClickCount
  } = useContext(favoriteClickCountContext);
  //= useContext(GlobalContext);//= useSpeakerDataManager();

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt="{firstName} {lastName}"
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            //data-sessionid={id}
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, speakerRec);
              incrementFavoriteClickCount();
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
        {/* <h5>
          Click count: {favoriteClickCount}
        </h5> */}
        <span>{bio}</span>
      </div>
    </div>
  );
});

export default SpeakerDetail;