// import logo from './logo.svg';
import './App.css';
import Hello from './components/start/Hello.jsx';

const element = <p>Hello, world!</p>
const data = [
  { to: 'UK', color: 'blue', size: '45px' },
  { to: 'Africa', color: 'orange', size: '45px' },
  { to: 'Australia', color: 'green', size: '30px' },

]

function App() {
  return (
    <>
      <div className="App">
        {element}
        <Hello to={'Latvija'} color={'red'} size={'15px'} />
        {1 + 1}
        <Hello to={'Estija'} color={'blue'} size={'25px'} />
        <Hello to={5 * 5} color={'orange'} size={'35px'} />


        {data.map((d, i) => <Hello key={i} to={d.to} color={d.color} size={d.size} />)}





      </div>


    </>
  );
}

export default App;
