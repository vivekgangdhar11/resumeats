import UploadResume from "../components/UploadResume";
import Result from "../components/Result";
import { useState } from "react";

function Dashboard() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>Dashboard</h1>
      <UploadResume onResult={setResult} />
      <Result data={result} />
    </div>
  );
}

export default Dashboard;
