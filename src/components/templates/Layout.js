import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
const Layout = ({title, children}) => {
    // const [currentValue, setNewValue] = useState([]);
    // useEffect(() => {
    // }, []);
    return (
        <div>
            <Header></Header>
            <Main title={title}>{children}</Main>
            <Footer></Footer>
        </div>
    )
};
export default Layout;