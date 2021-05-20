// libs
import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import ListVideoItems from "../ListVideoItems";

// actions
import { asyncGetListVideo } from "../../../../actions/Home/ListVideoAction";

// styles
import "./style.scss";

const ListVideo = () => {
  const dispatch = useDispatch();
  const videoSongList = useSelector((state) => state.ListVideoReducer.listVideo);
  const [page, setPage] = useState(10);
  useEffect(() => {
    dispatch(asyncGetListVideo({ page }));
  }, [dispatch, page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrePage = () => {
    setPage(page - 1);
  };
  // const handleHover = () => {
  //   setIsHover(true);
  // };
  // const handleUnHover = () => {
  //   setIsHover(false);
  // };
  return (
    <section className="list-video-wapper">
      <h1 className="list-video_title">
        VIDEO HOT <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <div className="list-video-panigation">
        <button disabled={page === 1 && true} onClick={handlePrePage} className="btn-panigation" type="button">
          Pre
        </button>
        <button onClick={handleNextPage} className="btn-panigation" type="button">
          Next
        </button>
      </div>
      <div className="list-video-wapper">
        {videoSongList && videoSongList.map((item) => <ListVideoItems key={item.id} item={item} />)}
      </div>
    </section>
  );
};

export default memo(ListVideo);
