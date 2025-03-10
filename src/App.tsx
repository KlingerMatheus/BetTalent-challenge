import { SearchIcon } from "lucide-react";
import { Navbar } from "./components/header/Navbar";
import { Table } from "./components/table";

import "./App.css";

function App() {
  const tableColumns = [
    "Foto",
    "Nome",
    "Cargo",
    "Data de admissão",
    "Telefone",
  ];

  const mockUsers: User[] = [
    {
      name: "Klinger",
      phone: "11950437900",
      role: "Frontend",
      startDate: "10091999",
      photo: "/",
    },
    {
      name: "Maria Silva",
      phone: "11987654321",
      role: "Backend",
      startDate: "15032005",
      photo: "/maria.jpg",
    },
    {
      name: "João Pereira",
      phone: "21912345678",
      role: "Designer",
      startDate: "22112010",
      photo: "/joao.png",
    },
    {
      name: "Ana Rodrigues",
      phone: "31998765432",
      role: "QA",
      startDate: "05072018",
      photo: "/ana.jpeg",
    },
    {
      name: "Pedro Santos",
      phone: "41987654321",
      role: "DevOps",
      startDate: "12012022",
      photo: "/pedro.gif",
    },
    {
      name: "Lucas Oliveira",
      phone: "51912345678",
      role: "Fullstack",
      startDate: "30082015",
      photo: "/lucas.svg",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="head">
          <h1>Funcionários</h1>
          <div className="search-wrapper">
            <input type="search" placeholder="Pesquisar" />
            <SearchIcon height={24} color="#DFDFDF" />
          </div>
        </div>
        <Table.Container>
          <Table.Head columns={tableColumns} />
          <tbody>
            {mockUsers.map((user) => (
              <Table.Item user={user} />
            ))}
          </tbody>
        </Table.Container>
      </main>
    </>
  );
}

export default App;
