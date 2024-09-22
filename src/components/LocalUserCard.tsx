import { ICameraVideoTrack, IMicrophoneAudioTrack, LocalUser } from "agora-rtc-react";
import React from "react";

interface props{
    localMicTrack: IMicrophoneAudioTrack | null, 
    cameraStat: boolean,
    micStat: boolean,
    localCameraTrack: ICameraVideoTrack | null
}

const LocalUserCard: React.FC<props> = ({localCameraTrack, localMicTrack, cameraStat, micStat}) => {
  return (
    <div className="user h-[60vh] aspect-video">
      <LocalUser
        className="rounded-3xl"
        audioTrack={localMicTrack}
        cameraOn={cameraStat}
        micOn={micStat}
        videoTrack={localCameraTrack}
        cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
      >
        <samp className="absolute bottom-5 left-10 bg-gray-700 bg-opacity-50 text-white px-2 py-1 rounded">
          You
        </samp>
      </LocalUser>
    </div>
  );
};

export default LocalUserCard;
