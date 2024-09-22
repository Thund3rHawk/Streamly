import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Video, User } from "lucide-react";

export default function JoinRoomForm() {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    console.log("Joining room:", roomName, "as", userName);
  };
  
  return (
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
                placeholder="Enter room name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
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
          <Button type="submit" className="w-full">
            Join Room
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-500">
        By joining, you agree to our Terms of Service and Privacy Policy.
      </CardFooter>
    </Card>
  );
}
