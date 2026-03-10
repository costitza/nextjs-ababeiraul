"use client"

import React, { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  src: string
  muted?: boolean
  forceMuted?: boolean
  autoPlay?: boolean
  loop?: boolean
  controls?: boolean
  showOpenButton?: boolean
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  muted = true,
  forceMuted = false,
  autoPlay = false,
  loop = true,
  controls = true,
  showOpenButton = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVolumeChange = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (forceMuted) {
      const v = e.currentTarget
      v.muted = true
      v.volume = 0
    }
  }

  useEffect(() => {
    if (forceMuted && videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
  }, [forceMuted])

  const isMp4 = src.toLowerCase().endsWith(".mp4")

  return (
    <div className="flex flex-col items-center gap-4 my-12 w-full">
      <div className="max-w-md w-full mx-auto rounded-lg overflow-hidden border border-white/5 bg-black/20">
        <video
          ref={videoRef}
          muted={forceMuted || muted}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
          playsInline
          preload="metadata"
          onVolumeChange={handleVolumeChange}
          className="w-full h-auto opacity-90 block"
        >
          <source src={src} type={isMp4 ? "video/mp4" : "video/quicktime"} />
          Your browser does not support the video tag.
        </video>
      </div>
      {showOpenButton && (
        <Button
          asChild
          variant="ghost"
          className="text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest font-bold h-8"
        >
        </Button>
      )}
    </div>
  )
}

export default VideoPlayer
