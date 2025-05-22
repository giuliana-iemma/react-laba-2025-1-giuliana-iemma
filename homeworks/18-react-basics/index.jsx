const Light = ({ color, state = 'off' }) => {
  return (
    <div
      className={
        state === 'on'
          ? `traffic__light traffic__light--${color}`
          : `traffic__light traffic__light--off`
      }
    ></div>
  );
};

const Head = () => {
  return <div className="traffic__head"></div>;
};

const YellowLight = () => {
  return (
    <div className="container">
        <div className="traffic">
            <Light color="red" state="off" />
            <Light color="yellow" state="on" />
            <Light color="green" state="off" />
        </div>
        <Head/>
    </div>
  );
};

const GreenLight = () => {
  return (
    <div className="container">
        <div className="traffic">
            <Light color="red" state="off" />
            <Light color="yellow" state="off" />
            <Light color="green" state="on" />
        </div>
        <Head/>
    </div>
  );
};

const RedLight = () => {
  return (
    <div className="container">
        <div className="traffic">
        <Light color="red" state="on" />
        <Light color="yellow" state="off" />
        <Light color="green" state="off" />
        </div>
        <Head/>
    </div>
  );
};

//Loop 
let lightStates = [GreenLight, RedLight, YellowLight];
let index = 0;

const renderLight = function () {
    const CurrentState = lightStates[index];
    ReactDOM.render(<CurrentState />, root);

    index = (index + 1) % lightStates.length;
}

//Find root in DOM
const root = document.getElementById('root');

setInterval(renderLight, 1000)

//Render Light into container
