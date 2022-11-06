const Main = ({title,children}) => {
    //const [currentValue, setNewValue] = useState([]);
    //useEffect(() => {
        //setNewValue(currentValue);
        //.then((currentValue) => setNewValue(currentValue));
    //}, []);
    return (
        <main className="row">
            {/*console.log(currentValue)*/}
            <h1 className="col s12 center">{title}</h1>
            <section className="col s12">{children}</section>
        </main>
    )
};
export default Main;