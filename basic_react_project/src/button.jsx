function printHello(){
    console.log("Hello");
}

function printBye(){
    console.log("Bye!");
}
function handleMouseOver(){
    console.log("console e chole ashlam!");
}
function handleDbclick(){
    
    console.log("Duibar click korar jonno dhonnobad!");
}
export default function Button(){
    return(
        <div>
            <button onClick={printHello}>CLick Me!</button>
            <p onClick={printBye}>This is the para event for demo</p>
            <button onDoubleClick={handleDbclick}>Double click me!</button>
            <button onMouseOver={handleMouseOver}>Amar upore ashlei console hwe jabe</button>
        </div>
    );
}