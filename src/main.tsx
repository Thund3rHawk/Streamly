import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import App from './App.tsx'
import './index.css'

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgoraRTCProvider client={client}>
      <App />
    </AgoraRTCProvider>
  </StrictMode>,
)
