import video_bg from "../assets/video_bg.png"
import play_btn from "../assets/play_vd_button.png"

import "../styles/components/Video.scss";

const Video = () => {
    return (
        <div className="video-conteiner">
            <img src={video_bg} alt="video" className="video-img"/>
            <div className="overlay"></div>
            <div className="play-btn">
                <a href="https://www.youtube.com">
                    <img src={play_btn} alt="play"/>
                </a>
            </div>
        </div>
    )
}

export default Video