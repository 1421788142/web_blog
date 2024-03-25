import React, { useMemo } from "react"
import { Image, Slider } from "antd"
import {
    AudioOutlined,
    CustomerServiceOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined,
    PauseCircleOutlined,
    PlayCircleOutlined,
    SoundOutlined,
    StepBackwardOutlined,
    StepForwardOutlined
} from "@ant-design/icons"
import { useUpdateEffect } from "@/hooks/useUpdateEffect"

// 歌曲时间格式化
const songTimeFilter = (val: number) => {
    const dt = new Date(val * 1000)
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')
    return `${mm}:${ss}`
}

// 格式化 Tooltip 的内容
const formatter = (value: number) => songTimeFilter(value)

// 音乐定时器
let musicTimer = null as any

const Music: React.FC = () => {
    // 标签
    const musicRef = React.useRef<HTMLAudioElement>(null)
    // 进度条
    const sliderRef = React.useRef<any>(null)
    const [musicList, setMusicList] = React.useState<any[]>([
        {
            id: 1,
            name: "离岸",
            author: "苏晗",
            musicSrc: "https://cdn-wuyou.wuyoucloud.com/upload/9bfd191495dd4fee8f1e8b40947b161d.mp3",
            imageSrc: "https://cdn-wuyou.wuyoucloud.com/upload/fed8c4d709c44058b26523dbe763e35c.jpg"
        },
        {
            id: 2,
            name: "我的世界没有你",
            author: "苏晗",
            musicSrc: "https://cdn-wuyou.wuyoucloud.com/upload/beba80f35d854323ac55c4bbdb2249ad.mp3",
            imageSrc: "https://cdn-wuyou.wuyoucloud.com/upload/4b69b1af1fcd41b88533520cb5f118ff.jpg"
        },
        {
            id: 3,
            name: "逆光",
            author: "苏晗",
            musicSrc: "https://cdn-wuyou.wuyoucloud.com/upload/493643a0bbf44d6ba6b8256ac1782d5b.mp3",
            imageSrc: "https://cdn-wuyou.wuyoucloud.com/upload/879958457532475f852bac589041ec60.jpg"
        }
    ])
    // 是否正在播放
    const [hasPlay, setHasPay] = React.useState<boolean>(false)
    // 音乐信息索引
    const [musicIndex, setMusicIndex] = React.useState<number>(0)
    // 是否展开全部
    const [open, setOpen] = React.useState<boolean>(false)
    // 音乐当前时间
    const [currentTime, setCurrentTime] = React.useState<number>(0)
    // 音乐时长
    const [maxTime, setMaxTime] = React.useState<number>(0)
    // 播放器音量
    const [musicVolume, setMusicVolume] = React.useState<number>(0.5)

    const play = () => {
        if (musicRef.current?.paused) {
            if (!musicVolume) {
                musicRef.current.volume = 0.5
                setMusicVolume(0.5)
            }
            musicRef.current?.play()
            watchMusicInfo()
            setHasPay(true)
        } else {
            musicRef.current?.pause()
            setHasPay(false)
            clearInterval(musicTimer)
        }
    }

    const currentMusic = useMemo(() => {
        return musicList[musicIndex]
    }, [musicIndex, musicList])

    useUpdateEffect(() => {
        if (!musicList.length) return
        setTimeout(play, 500)
    },[currentMusic])

    const clearTimer = () => {
        clearInterval(musicTimer)
        musicTimer = null
    }

    // 获取当前播放音乐信息
    const watchMusicInfo = () => {
        clearTimer()
        // 更新一下总时长
        setMaxTime(musicRef.current?.duration || 0)
        // 设置定时器，每 0.5s 更新一下歌曲进度
        musicTimer = setInterval(() => {
            //   如果音乐暂停了，结束定时器
            if (musicRef.current?.paused) {
                clearTimer()
                setHasPay(false)
            }
            //   如果音乐播放结束了，结束定时器
            if (musicRef.current?.ended) {
                clearTimer()
                setHasPay(false)
                changePlayMusic(1)
            }
            setCurrentTime(musicRef.current?.currentTime || 0)
        }, 500)
    }

    // 切换歌曲的播放
    const changePlayMusic = (num: number) => {
        const index = musicIndex + num
        if (index < 0) return setMusicIndex(musicList.length - 1)
        if (index >= musicList.length) return setMusicIndex(0)
        setMusicIndex(index)
    }

    // 通过进度条更改歌曲播放进度
    const changeMusicTime = (value: number) => {
        clearTimer()
        if(!musicRef.current) return
        musicRef.current.currentTime = value
        if (musicRef.current?.paused) musicRef.current.play()
        watchMusicInfo()
        sliderRef.current.blur()
    }

    const focusMusic = ()=>{
        clearTimer()
        setTimeout(()=>{
            sliderRef.current.blur()
        },1000)
    }

    const blurMusic = ()=>{
        if(!musicRef.current) return
        changeMusicTime(musicRef.current?.currentTime)
    }

    // 调整音量
    const changePlayerVolume = (value:number) => {
        if(!musicRef.current) return
        if (!value){
            setMusicVolume(0)
            musicRef.current.volume = 0
        } else {
            setMusicVolume(value / 10)
            musicRef.current.volume = value / 10
        }
    }

    // 播放暂停
    const playHender = React.useMemo(() => {
        return (
            <div className="flex items-center justify-center">
                <span className="flex items-center justify-center" onClick={play}>{hasPlay ? <PauseCircleOutlined /> : <PlayCircleOutlined />}</span>
                <span onClick={() => { setOpen(!open) }}>{!open && <DoubleRightOutlined />}</span>
            </div>
        )
    }, [hasPlay, open])

    return (
        <div className="fixed z-[9999999] bottom-2 left-2">
            <audio ref={musicRef} src={currentMusic.musicSrc}></audio>
            <div className={["mucic-controls", (open ? 'open' : '')].join(' ')}>
                <div className="mucic-controls-img">
                    <Image
                        className={["mucic-controls-img-con", (hasPlay ? 'rotate' : '')].join(' ')}
                        width={100} height={100}
                        preview={false} src={currentMusic.imageSrc}
                    />
                    <div className="mucic-controls-img-mask">
                        {playHender}
                    </div>
                </div>
                <div className='mucic-controls-info'>
                    <div className="flex">
                        <div className="truncate max-w-[170px]">
                            <CustomerServiceOutlined />
                            <span>{currentMusic.name}</span>
                        </div>
                        <div className="ml-2 truncate max-w-[130px]">
                            <AudioOutlined />
                            <span>{currentMusic.author}</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[180px] mr-4">
                            <Slider
                                ref={sliderRef}
                                value={currentTime}
                                max={maxTime}
                                onFocus={focusMusic}
                                onBlur={blurMusic}
                                onChange={(value) => setCurrentTime(value)}
                                onChangeComplete={changeMusicTime}
                            />
                        </div>
                        <span>{songTimeFilter(currentTime)} / {songTimeFilter(maxTime)}</span>
                    </div>
                    <div className="btns">
                        {/* 上一首 */}
                        <StepBackwardOutlined onClick={() => changePlayMusic(-1)} />
                        {/* 暂停播放 */}
                        {playHender}
                        {/* 下一首 */}
                        <StepForwardOutlined onClick={() => changePlayMusic(1)} />
                        {/* 音量 */}
                        <SoundOutlined />
                        <div className="flex-1">
                            <Slider
                                value={musicVolume * 10}
                                max={10}
                                onChange={changePlayerVolume}
                            />
                        </div>
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className="close-btn">
                    {open ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
                </div>
            </div>
        </div>
    )
}


export default Music