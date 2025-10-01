import "./style.css";
import Trash from "../../assets/trash-icon-symbol-sign-vector.jpg";

function Home() {
  const users = [
    {
      id: "Barcelona",
      name: "Galvao",
      age: 30,
      email: "Galvão@gmail.com",
    },
    {
      id: "Lisabona",
      name: "Guilheme",
      age: 25,
      email: "Guilherme@gmail.com",
    },
    {
      id: "Londres",
      name: "Simplicio",
      age: 20,
      email: "Simplicio@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input placeholder="nome" type="text" name="nome" id="" />
        <input placeholder="idade" type="number" name="idade" id="" />
        <input placeholder="email" type="email" name="email" id="" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div className="card" key={user.id}>
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
