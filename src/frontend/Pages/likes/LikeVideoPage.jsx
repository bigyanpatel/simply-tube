import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar, HorizontalVideoCard } from "../../components/componentExport";
import { useAuth, useDataStore } from "../../contexts/contextExport";
import { deleteLikeHandler } from "../../helperfunctions/likeHandler";
import Likedislike from "../../images/Likedislike.svg";
import "./LikeVideoPage.css";

export const LikeVideoPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { dataStoreState, toastProps } = useDataStore();
  const { videos } = dataStoreState;
  const likedVideos = videos?.filter((item) => item.isLiked);

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  return (
    <>
      <section className="main-wrapper">
        <div className="main-container">
          <Sidebar />
          <div className="video-grid-container">
            <div className="feature-video-grid ">
              <div className="fv-info flex-center flex-dir-col">
                <img
                  src={Likedislike}
                  className="fv-intro-image"
                  alt="video thumbnail"
                />
                <p className="fs-xlg mg-vrtl-md">Liked videos</p>
                <p className="fs-md mg-vrtl-sm">
                  {likedVideos.length}
                  {likedVideos.length <= 1 ? " Video" : " Videos"}
                </p>
              </div>
              <div className="fv-videos">
                {likedVideos.length >= 1 ? (
                  likedVideos.map((item, index) => {
                    return (
                      <HorizontalVideoCard
                        key={index}
                        toastProps={toastProps}
                        deleteHandler={deleteLikeHandler}
                        videoItem={item}
                      />
                    );
                  })
                ) : (
                  <div className="flex-center flex-dir-col">
                    <p className="fs-lg">Empty like videos list</p>
                    <Link to="/videolist" className="btn is-solid fs-btw-ml">
                      Go to Watch Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};