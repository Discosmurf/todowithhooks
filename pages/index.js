import ContextProvider from '../store/ContextProvider';
import Board from '../components/Board';
import Modal from '../components/Modal';
import Header from '../components/Header';

const Home = () => (
    <ContextProvider>
      <Header />
      <Board />
      <Modal />
    </ContextProvider>
);

export default Home;
