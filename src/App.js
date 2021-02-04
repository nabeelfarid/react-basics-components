import Cricket from './Cricket'

function App() {
  return (
    <div>
      <h1>List of Cricket Matches</h1>
      
      <Cricket stadium="Karachi" team1="Pakistan" team2="England"></Cricket>
      <hr/>
      <Cricket stadium="Lahore" team1="Australia" team2="India"></Cricket>
      <hr/>
      <Cricket stadium="Islamabad" team1="Sri Lanka" team2="South Africa"></Cricket>

    </div>
  );
}

export default App;
