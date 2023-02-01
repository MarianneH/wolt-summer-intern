// import "./App.css";
import DeliveryFeeCalculator from "./components/DeliveryFeeCalculator";
import { GlobalStyle } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <DeliveryFeeCalculator />
    </div>
  );
};

export default App;
