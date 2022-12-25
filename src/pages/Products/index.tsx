import './styles.scss';
import Header from "../../components/Header";
import { BiSearch } from 'react-icons/bi';


export default function Products() {
    return (
        <>
            <Header />

            <div className="filters">
                <div className="input-search">
                    <BiSearch className="icon" />
                    <input placeholder="Pesquise por um produto..." />
                </div>

                <div className="combobox">
                    <span>Filtrado por:</span>
                    <select name="combobox-values" className="combobox-values">
                        <option value="lower-price">Menor preço</option>
                        <option value="best-seller">Mais vendidos</option>
                    </select>
                </div>
            </div>
        </>
    )
}