const Main = ({title,children}) => {
    //const [currentValue, setNewValue] = useState([]);
    //useEffect(() => {
        //setNewValue(currentValue);
        //.then((currentValue) => setNewValue(currentValue));
    //}, []);
    return (
        <main>
            {/*console.log(currentValue)*/}
            <h1>{title}</h1>
            <section>{children}</section>
        </main>
    )
};
export default Main;