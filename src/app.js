import './app.css';
import AccountOverview from './components/account-overview/account-overview';
import {useState} from "react";

const accountOverviewStub = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    phone: '020 3362 4208'
  },
  salesOverview: {
    uploads: 0,
    successfulUploads: 0,
    linesAttempted: 0,
    linesSaved: 0,
    lastUploadDate: 0,
  }
}

function App() {

  const [accountOverview, setAccountOverview] = useState(accountOverviewStub);

  const setSalesOverview = (newSalesOverview) => {
    setAccountOverview(prevState => ({
      ...prevState,
      salesOverview: newSalesOverview
    }));
  };

  return (
    <div className="App">
      <AccountOverview
          data={accountOverview}
          onSalesOverviewChange={setSalesOverview}
      />
    </div>
  );
}

export default App;
