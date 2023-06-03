import { FC, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import MaterialIcon from '../MaterialIcon'

import styles from './Player.module.scss'

interface IPlayer {
  url: string
  autoPlay?: boolean
}

const Player: FC<IPlayer> = ({ url, autoPlay = false }) => {
  const playerRef = useRef<ReactPlayer | null>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isRotated, setIsRotated] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      document.body.classList.add(styles.lock)
    } else {
      document.body.classList.remove(styles.lock)
    }
  }, [isPlaying])

  const toggleVideoMode = () => {
    setIsRotated(!isRotated)
  }

  return (
    <div className={styles.player}>
      <div
        className={styles.videoContainer}
        style={{ transform: isRotated ? 'rotate(90deg)' : 'none' }}
      >
        <ReactPlayer
          url='https://vimeo.com/169599296'
          controls={true}
          width="100%"
          height="100%"
          playing={isPlaying}
          ref={playerRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
      <div className={styles.rotate} onClick={toggleVideoMode}>
        <MaterialIcon name="MdOutlineCropRotate" />
      </div>
    </div>
  )
}

export default Player
