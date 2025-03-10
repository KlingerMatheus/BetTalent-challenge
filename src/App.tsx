import { SearchIcon } from "lucide-react";
import { Navbar } from "./components/header/Navbar";
import { Table } from "./components/table";

import "./App.css";
import { useEffect, useMemo, useState } from "react";

function App() {
  const tableColumns = [
    "Foto",
    "Nome",
    "Cargo",
    "Data de admissão",
    "Telefone",
  ];

  const [employees, setEmployees] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const foundEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/employees");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setEmployees(json);
    } catch (err) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="head">
          <h1>Funcionários</h1>
          <div className="search-wrapper">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Pesquisar"
            />
            <SearchIcon height={24} color="#DFDFDF" />
          </div>
        </div>

        {foundEmployees && (
          <Table.Container>
            <Table.Head columns={tableColumns} />
            <tbody>
              {foundEmployees.map((employee) => (
                <Table.Item key={employee.id} user={employee} />
              ))}
            </tbody>
          </Table.Container>
        )}

        {isLoading && "Carregando..."}
        {error}
        {foundEmployees.length === 0 && "Nenhum funcionário foi encontrado"}
      </main>
    </>
  );
}

export default App;
