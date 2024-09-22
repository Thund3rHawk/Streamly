import { Button } from "@/components/ui/button";
import {
  useIsConnected,
  useJoin,
  useLocalMicrophoneTrack,
  useLocalCameraTrack,
  usePublish,
  useRemoteUsers,
} from "agora-rtc-react";
import { Mic, MicOff, PhoneOff, Video, VideoOff, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import RemoteUserCard from "@/components/RemoteUserCard";
import LocalUserCard from "@/components/LocalUserCard";

export const VideoClass = () => {
  const [calling, setCalling] = useState(false);
  const isConnected = useIsConnected();
  const [userName, setUserName] = useState("");
  const [channel, setChannel] = useState("");

  const appId = import.meta.env.VITE_AGORA_APP_ID;
  const token = import.meta.env.VITE_AGORA_TOKEN;

  useJoin(
    { appid: appId, channel: channel, token: token ? token : null },
    calling
  );

  //local user
  const [micOn, setMic] = useState(false);
  const [cameraOn, setCamera] = useState(false);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);
  usePublish([localMicrophoneTrack, localCameraTrack]);

  //remote users
  const remoteUsers = useRemoteUsers();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCalling(true);
  };

  return (
    <>
      <div className="pt-[100px]">
        {isConnected ? (
          <div className="pt-5 p-10 flex gap-6 flex-1">
            <LocalUserCard
              cameraStat={cameraOn}
              micStat={micOn}
              localCameraTrack={localCameraTrack}
              localMicTrack={localMicrophoneTrack}
            />
            {remoteUsers.map((user) => (
              <RemoteUserCard userId={user.uid} user={user} key={user.uid} />
            ))}
          </div>
        ) : (
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Join a Room
              </CardTitle>
              <CardDescription className="text-center">
                Enter a room name and your name to join a video call
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="room-name" className="text-sm font-medium">
                    Room Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="room-name"
                      type="text"
                      placeholder="Enter channel name"
                      value={channel}
                      onChange={(e) => setChannel(e.target.value)}
                      required
                      className="pl-10"
                    />
                    <Video className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-name" className="text-sm font-medium">
                    Your Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="user-name"
                      type="text"
                      placeholder="Enter your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                      className="pl-10"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={!channel}>
                  Join Room
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center text-sm text-gray-500">
              By joining, you agree to our Terms of Service and Privacy Policy.
            </CardFooter>
          </Card>
        )}
      </div>
      {isConnected && (
        <div className="pb-10 flex justify-center border-none w-[60vw] rounded-xl align-middle">
          <Button
            variant={cameraOn ? "secondary" : "destructive"}
            size="icon"
            onClick={() => setCamera(!cameraOn)}
            className="w-16 rounded-[20px] mx-1"
          >
            {cameraOn ? (
              <Video className="h-6 w-6" />
            ) : (
              <VideoOff className="h-6 w-6" />
            )}
          </Button>
          <Button
            variant={!micOn ? "destructive" : "secondary"}
            size="icon"
            onClick={() => setMic(!micOn)}
            className="w-16 rounded-[20px] mx-1"
          >
            {!micOn ? (
              <MicOff className="h-6 w-6" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>
          <Button
            variant="destructive"
            className={`w-16 rounded-[20px] ${
              calling ? "btn-phone-active" : ""
            }`}
            onClick={() => setCalling((a) => !a)}
          >
            {calling ? <PhoneOff className="h-6 w-6" /> : ""}
          </Button>
        </div>
      )}
    </>
  );
};

export default VideoClass;
