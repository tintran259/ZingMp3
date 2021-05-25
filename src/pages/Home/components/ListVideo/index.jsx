// libs
import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// hooks
import { useKeyPress, useHover } from "../../../../hooks";
// components
import ListVideoItems from "../ListVideoItems";
// actions
import { asyncGetListVideo } from "../../../../actions/Home/ListVideoAction";
// contants
import CONSTANTS from "../../../../contants";
// orthers
import "./style.scss";

const ListVideo = () => {
  // Constants
  const { KEY_CODE } = CONSTANTS;
  // react-redux
  const dispatch = useDispatch();
  const videoSongList = useSelector((state) => state.ListVideoReducer.listVideo);
  // contructor
  const [page, setPage] = useState(10);
  // custom hooks KeyDown
  const [hoverRef, isHovered] = useHover();
  const result = useKeyPress(KEY_CODE, page, isHovered);
  // Event Key
  useEffect(() => {
    setPage(result);
  }, [result]);
  // fetch API
  useEffect(() => {
    dispatch(asyncGetListVideo({ page }));
  }, [dispatch, page]);
  // handle NextPage ;
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const debounceNextPage = (func, delay) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, delay);
    };
  };
  // handle PrePage
  const handlePrePage = () => {
    setPage(page - 1);
  };
  const debouncePrePage = (func, delay) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, delay);
    };
  };
  // handle Hover.
  return (
    <section className="list-video-wapper" ref={hoverRef}>
      <h1 className="list-video_title">
        VIDEO HOT <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <div className="list-video-panigation">
        <button
          disabled={page === 1 && true}
          onClick={debouncePrePage(handlePrePage, 500)}
          className="btn-panigation"
          type="button"
        >
          Pre
        </button>
        <button onClick={debounceNextPage(handleNextPage, 500)} className="btn-panigation" type="button">
          Next
        </button>
      </div>
      <div className="list-video-main-wapper">
        {videoSongList && videoSongList.map((item) => <ListVideoItems key={item.id} item={item} />)}
      </div>
    </section>
  );
};

export default memo(ListVideo);
