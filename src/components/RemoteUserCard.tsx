import { IAgoraRTCRemoteUser, RemoteUser, UID } from "agora-rtc-react";
import React from "react";

interface props {
    userId: UID,
    user: IAgoraRTCRemoteUser,    
}

const RemoteUserCard: React.FC <props> = ({userId, user}) => {
  return (
    <div className="user h-[15vh] aspect-video border-none" key={user.uid}>
      <RemoteUser
        className="rounded-lg border-none"
        cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
        user={user}
      >
        <samp className="absolute bottom-2 left-2 bg-gray-700 bg-opacity-50 text-white px-2 py-1 rounded">
          {userId}
        </samp>
      </RemoteUser>
    </div>
  );
};

export default RemoteUserCard;
