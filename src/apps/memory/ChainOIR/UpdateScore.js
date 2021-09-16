import LogicGame from "./LogicGame";

class UpdateScore extends LogicGame {
    
    process(twice, item, Score, stateBoard, setStateBoard) {

        const [Score, setScore] = useState(50);

        setScore((Score) => Score + 5);
        
    
};
}
export default UpdateScore;
