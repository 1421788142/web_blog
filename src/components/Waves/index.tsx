const Waves = ()=>{
    return (<>
        <div className="waves-area">
            <svg
            className="waves-svg"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            >
            <defs>
                <path
                id="gentle-wave"
                d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z"
                ></path>
            </defs>
            <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0"></use>
                <use xlinkHref="#gentle-wave" x="48" y="3"></use>
                <use xlinkHref="#gentle-wave" x="48" y="5"></use>
                <use xlinkHref="#gentle-wave" x="48" y="7"></use>
            </g>
            </svg>
        </div>
    </>)
}

export default Waves