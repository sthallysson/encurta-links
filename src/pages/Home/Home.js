import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./Home.css";
import Menu from "../../components/Menu/Menu";
import LinkItem from "../../components/LinkItem/LinkItem";
import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  const handleShortLink = async () => {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);

      saveLink("chavequalquer", response.data);

      setLink("");
    } catch {
      alert("Ops!! parece que algo deu errado!");
      setLink("");
    }
  };

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.svg" alt="Encurta link logo" />
        <h1>EncurtaLink</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Gerar Link</button>
      </div>

      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
