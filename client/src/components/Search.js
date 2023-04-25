import { Link } from "react-router-dom";
import s from "./search.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sort, { searchCountries } from "../actions";
import CreateActivity from "./CreateActivity";
import Filters from "./Filters";
import swal from "sweetalert";

export default function Search({ setPagina }) {
  const [search, setSearch] = useState("");
  const [buscando, setBuscando] = useState(false);
  //dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value); //obtengo el valor ingresado
  }
  const handleSearch = () => {
    setBuscando(true);
    dispatch(searchCountries(search));

    setPagina(1);
    setTimeout(() => {
      setBuscando(false);
      setSearch("");
    }, 1000);
  };

  return (
    <div>
      <nav className={s.containerNav}>
        <Link className={s.linkhome} to="/">
          Countries
        </Link>

        <div className={s.form}>
          <input
            className={s.input}
            type="text"
            placeholder="Search country.."
            value={search}
            onChange={onInputChange}
          />
          <button className={s.inputButton} onClick={handleSearch}>
            {buscando ? "Searching..." : "Search"}
          </button>
        </div>
        <div className={s.links}>
          <Link className={s.link} to="/createActivity">
            Create Activity{" "}
          </Link>
        </div>
      </nav>
    </div>
  );
}
