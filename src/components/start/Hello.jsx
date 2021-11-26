import Border from "../Border";
function Hello({ to, color, size }) {

    const add = w => w + '!!!'

    return (
        <h1 style={{
            color: color,
            fontSize: size
        }}> 
        <Border word='Labas'></Border> <Border word={add(to)}></Border> !</h1>

    )
}

export default Hello;