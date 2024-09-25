import 'bootstrap/dist/css/bootstrap.css';

function BGChanger(props) {
  return (
    <div style={{
      backgroundImage: `linear-gradient( to bottom, transparent 60%, ${props.colorBot} 100%), linear-gradient(to top, transparent 60%, ${props.colorTop} 100%), url("${props.background}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
        <h1>s</h1>
    </div>
  );
}

export default BGChanger;