const Light = ({color, state = 'off'}) => {
    return <div className={state === 'on' ? `traffic__light traffic__light--${color}` : `traffic__light traffic__light--off`}></div>
}

const YellowLight = () => {
    return <div className="traffic">
        <Light color='red' state='off'/>
        <Light color='yellow' state='on'/>
        <Light color='green' state='off'/>
    </div>;
}

const GreenLight = () => {
    return <div className="traffic">
        <Light color='red' state='off'/>
        <Light color='yellow' state='off'/>
        <Light color='green' state='on'/>
    </div>;
}

const RedLight = () => {
    return <div className="traffic">
        <Light color='red' state='on'/>
        <Light color='yellow' state='off'/>
        <Light color='green' state='off'/>
    </div>;
}

const Head = () => {
    return <div className="traffic__head"></div>
}

const TrafficLight = () => {
    //Function to loop set interval
    return <div className="traffic">
        <GreenLight/>
    </div>;
}

const Container = () => {
    return <div className="container">
        <TrafficLight/>
        <Head/>
    </div>;
}

const root = document.getElementById("root");

//Render Red Light into container
ReactDOM.render(<Container />, root)
